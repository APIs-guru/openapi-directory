from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AcceptEntityTransferPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptEntityTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AcceptEntityTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AcceptEntityTransferRequest:
    path_params: AcceptEntityTransferPathParams = field()
    security: AcceptEntityTransferSecurity = field()
    

@dataclass
class AcceptEntityTransferResponse:
    content_type: str = field()
    status_code: int = field()
    accept_entity_transfer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    accept_entity_transfer_default_application_json_object: Optional[AcceptEntityTransferDefaultApplicationJSON] = field(default=None)
    
