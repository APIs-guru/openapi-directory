from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartDtmfPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartDtmfSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartDtmfRequest:
    path_params: StartDtmfPathParams = field(default=None)
    request: shared.DtmfRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StartDtmfSecurity = field(default=None)
    

@dataclass
class StartDtmfResponse:
    content_type: str = field(default=None)
    dtmf_response: Optional[shared.DtmfResponse] = field(default=None)
    status_code: int = field(default=None)
    
