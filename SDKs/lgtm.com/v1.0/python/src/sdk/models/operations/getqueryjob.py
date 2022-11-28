from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetQueryJobPathParams:
    queryjob_id: str = field(metadata={'path_param': { 'field_name': 'queryjob-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryJobSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetQueryJobRequest:
    path_params: GetQueryJobPathParams = field()
    security: GetQueryJobSecurity = field()
    

@dataclass
class GetQueryJobResponse:
    content_type: str = field()
    status_code: int = field()
    queryjob: Optional[shared.Queryjob] = field(default=None)
    
