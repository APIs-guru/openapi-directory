from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetEntityTransferPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEntityTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetEntityTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetEntityTransferRequest:
    path_params: GetEntityTransferPathParams = field()
    security: GetEntityTransferSecurity = field()
    

@dataclass
class GetEntityTransferResponse:
    content_type: str = field()
    status_code: int = field()
    entity_transfer: Optional[shared.EntityTransfer] = field(default=None)
    get_entity_transfer_default_application_json_object: Optional[GetEntityTransferDefaultApplicationJSON] = field(default=None)
    
