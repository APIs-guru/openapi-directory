from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEntityTransferPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEntityTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetEntityTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEntityTransferSecurity:
    option1: Optional[GetEntityTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetEntityTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetEntityTransferRequest:
    path_params: GetEntityTransferPathParams = field(default=None)
    security: GetEntityTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetEntityTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetEntityTransferResponse:
    content_type: str = field(default=None)
    entity_transfer: Optional[shared.EntityTransfer] = field(default=None)
    status_code: int = field(default=None)
    get_entity_transfer_default_application_json_object: Optional[GetEntityTransferDefaultApplicationJSON] = field(default=None)
    
