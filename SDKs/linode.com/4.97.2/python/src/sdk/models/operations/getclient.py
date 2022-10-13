from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetClientPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetClientSecurity:
    option1: Optional[GetClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetClientRequest:
    path_params: GetClientPathParams = field(default=None)
    security: GetClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetClientResponse:
    content_type: str = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    status_code: int = field(default=None)
    get_client_default_application_json_object: Optional[GetClientDefaultApplicationJSON] = field(default=None)
    
