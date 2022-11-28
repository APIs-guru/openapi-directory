from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteServiceTransferPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteServiceTransferRequest:
    path_params: DeleteServiceTransferPathParams = field()
    security: DeleteServiceTransferSecurity = field()
    

@dataclass
class DeleteServiceTransferResponse:
    content_type: str = field()
    status_code: int = field()
    delete_service_transfer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_service_transfer_default_application_json_object: Optional[DeleteServiceTransferDefaultApplicationJSON] = field(default=None)
    
