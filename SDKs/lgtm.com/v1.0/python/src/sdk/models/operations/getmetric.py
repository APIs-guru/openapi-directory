from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMetricPathParams:
    metric_id: str = field(metadata={'path_param': { 'field_name': 'metric-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMetricSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMetricRequest:
    path_params: GetMetricPathParams = field()
    security: GetMetricSecurity = field()
    

@dataclass
class GetMetricResponse:
    content_type: str = field()
    status_code: int = field()
    metric: Optional[shared.Metric] = field(default=None)
    
