from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AcceptServiceTransferPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptServiceTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AcceptServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AcceptServiceTransferRequest:
    path_params: AcceptServiceTransferPathParams = field()
    security: AcceptServiceTransferSecurity = field()
    

@dataclass
class AcceptServiceTransferResponse:
    content_type: str = field()
    status_code: int = field()
    accept_service_transfer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    accept_service_transfer_default_application_json_object: Optional[AcceptServiceTransferDefaultApplicationJSON] = field(default=None)
    
