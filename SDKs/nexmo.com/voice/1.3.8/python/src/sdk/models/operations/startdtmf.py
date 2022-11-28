from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartDtmfPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartDtmfSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartDtmfRequest:
    path_params: StartDtmfPathParams = field()
    request: shared.DtmfRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: StartDtmfSecurity = field()
    

@dataclass
class StartDtmfResponse:
    content_type: str = field()
    status_code: int = field()
    dtmf_response: Optional[shared.DtmfResponse] = field(default=None)
    
