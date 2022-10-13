from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteEntityTransferPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEntityTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteEntityTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteEntityTransferSecurity:
    option1: Optional[DeleteEntityTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteEntityTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteEntityTransferRequest:
    path_params: DeleteEntityTransferPathParams = field(default=None)
    security: DeleteEntityTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteEntityTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteEntityTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_entity_transfer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_entity_transfer_default_application_json_object: Optional[DeleteEntityTransferDefaultApplicationJSON] = field(default=None)
    
