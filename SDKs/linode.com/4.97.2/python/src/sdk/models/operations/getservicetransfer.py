from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetServiceTransferPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetServiceTransferRequest:
    path_params: GetServiceTransferPathParams = field()
    security: GetServiceTransferSecurity = field()
    

@dataclass
class GetServiceTransferResponse:
    content_type: str = field()
    status_code: int = field()
    service_transfer: Optional[shared.ServiceTransfer] = field(default=None)
    get_service_transfer_default_application_json_object: Optional[GetServiceTransferDefaultApplicationJSON] = field(default=None)
    
