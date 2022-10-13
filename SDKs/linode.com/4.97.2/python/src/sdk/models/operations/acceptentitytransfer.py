from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AcceptEntityTransferPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptEntityTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AcceptEntityTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AcceptEntityTransferSecurity:
    option1: Optional[AcceptEntityTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AcceptEntityTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AcceptEntityTransferRequest:
    path_params: AcceptEntityTransferPathParams = field(default=None)
    security: AcceptEntityTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AcceptEntityTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AcceptEntityTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    accept_entity_transfer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    accept_entity_transfer_default_application_json_object: Optional[AcceptEntityTransferDefaultApplicationJSON] = field(default=None)
    
