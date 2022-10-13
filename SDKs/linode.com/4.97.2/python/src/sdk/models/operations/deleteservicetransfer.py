from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteServiceTransferPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteServiceTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServiceTransferSecurity:
    option1: Optional[DeleteServiceTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteServiceTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteServiceTransferRequest:
    path_params: DeleteServiceTransferPathParams = field(default=None)
    security: DeleteServiceTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteServiceTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_service_transfer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_service_transfer_default_application_json_object: Optional[DeleteServiceTransferDefaultApplicationJSON] = field(default=None)
    
