from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteLongviewClientPathParams:
    client_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLongviewClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLongviewClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteLongviewClientSecurity:
    option1: Optional[DeleteLongviewClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteLongviewClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteLongviewClientRequest:
    path_params: DeleteLongviewClientPathParams = field(default=None)
    security: DeleteLongviewClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteLongviewClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteLongviewClientResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_longview_client_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_longview_client_default_application_json_object: Optional[DeleteLongviewClientDefaultApplicationJSON] = field(default=None)
    
