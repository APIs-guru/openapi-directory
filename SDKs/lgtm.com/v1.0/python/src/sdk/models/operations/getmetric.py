from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMetricPathParams:
    metric_id: str = field(default=None, metadata={'path_param': { 'field_name': 'metric-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMetricSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMetricRequest:
    path_params: GetMetricPathParams = field(default=None)
    security: GetMetricSecurity = field(default=None)
    

@dataclass
class GetMetricResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    metric: Optional[shared.Metric] = field(default=None)
    
