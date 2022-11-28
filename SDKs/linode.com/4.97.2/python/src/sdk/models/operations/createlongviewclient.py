from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateLongviewClientSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateLongviewClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateLongviewClientRequest:
    request: shared.LongviewClientInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLongviewClientSecurity = field()
    

@dataclass
class CreateLongviewClientResponse:
    content_type: str = field()
    status_code: int = field()
    longview_client: Optional[shared.LongviewClient] = field(default=None)
    create_longview_client_default_application_json_object: Optional[CreateLongviewClientDefaultApplicationJSON] = field(default=None)
    
