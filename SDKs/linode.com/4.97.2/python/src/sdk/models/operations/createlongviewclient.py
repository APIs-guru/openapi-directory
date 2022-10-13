from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateLongviewClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateLongviewClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateLongviewClientSecurity:
    option1: Optional[CreateLongviewClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateLongviewClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateLongviewClientRequest:
    request: shared.LongviewClient = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLongviewClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateLongviewClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateLongviewClientResponse:
    content_type: str = field(default=None)
    longview_client: Optional[shared.LongviewClient] = field(default=None)
    status_code: int = field(default=None)
    create_longview_client_default_application_json_object: Optional[CreateLongviewClientDefaultApplicationJSON] = field(default=None)
    
