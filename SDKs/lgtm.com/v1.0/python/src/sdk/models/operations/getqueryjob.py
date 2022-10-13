from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetQueryJobPathParams:
    queryjob_id: str = field(default=None, metadata={'path_param': { 'field_name': 'queryjob-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryJobSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetQueryJobRequest:
    path_params: GetQueryJobPathParams = field(default=None)
    security: GetQueryJobSecurity = field(default=None)
    

@dataclass
class GetQueryJobResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    queryjob: Optional[shared.Queryjob] = field(default=None)
    
