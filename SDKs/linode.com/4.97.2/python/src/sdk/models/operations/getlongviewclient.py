from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLongviewClientPathParams:
    client_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLongviewClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLongviewClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLongviewClientSecurity:
    option1: Optional[GetLongviewClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLongviewClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLongviewClientRequest:
    path_params: GetLongviewClientPathParams = field(default=None)
    security: GetLongviewClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLongviewClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLongviewClientResponse:
    content_type: str = field(default=None)
    longview_client: Optional[shared.LongviewClient] = field(default=None)
    status_code: int = field(default=None)
    get_longview_client_default_application_json_object: Optional[GetLongviewClientDefaultApplicationJSON] = field(default=None)
    
