from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLongviewClientPathParams:
    client_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLongviewClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateLongviewClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLongviewClientSecurity:
    option1: Optional[UpdateLongviewClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateLongviewClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateLongviewClientRequest:
    path_params: UpdateLongviewClientPathParams = field(default=None)
    request: shared.LongviewClient = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLongviewClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateLongviewClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateLongviewClientResponse:
    content_type: str = field(default=None)
    longview_client: Optional[shared.LongviewClient] = field(default=None)
    status_code: int = field(default=None)
    update_longview_client_default_application_json_object: Optional[UpdateLongviewClientDefaultApplicationJSON] = field(default=None)
    
