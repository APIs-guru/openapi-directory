from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteClientPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteClientSecurity:
    option1: Optional[DeleteClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteClientRequest:
    path_params: DeleteClientPathParams = field(default=None)
    security: DeleteClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteClientResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_client_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_client_default_application_json_object: Optional[DeleteClientDefaultApplicationJSON] = field(default=None)
    
