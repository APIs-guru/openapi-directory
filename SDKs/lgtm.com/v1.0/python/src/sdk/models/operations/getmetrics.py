from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMetricsSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMetricsRequest:
    security: GetMetricsSecurity = field()
    

@dataclass
class GetMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    metrics_list: Optional[shared.MetricsList] = field(default=None)
    
