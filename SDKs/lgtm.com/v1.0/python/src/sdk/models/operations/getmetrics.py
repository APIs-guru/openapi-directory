from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMetricsSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMetricsRequest:
    security: GetMetricsSecurity = field(default=None)
    

@dataclass
class GetMetricsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    metrics_list: Optional[shared.MetricsList] = field(default=None)
    
