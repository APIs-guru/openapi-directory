from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateTagRequestBody:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    domains: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    linodes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linodes') }})
    nodebalancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodebalancers') }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass
class CreateTagSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateTagDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateTagRequest:
    security: CreateTagSecurity = field()
    request: Optional[CreateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTagResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    create_tag_default_application_json_object: Optional[CreateTagDefaultApplicationJSON] = field(default=None)
    
