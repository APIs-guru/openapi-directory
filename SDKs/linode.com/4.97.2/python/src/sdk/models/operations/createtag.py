from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateTagRequestBody:
    domains: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    linodes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linodes' }})
    nodebalancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodebalancers' }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass
class CreateTagSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateTagSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTagSecurity:
    option1: Optional[CreateTagSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateTagSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateTagRequest:
    request: Optional[CreateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTagSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateTagDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    create_tag_default_application_json_object: Optional[CreateTagDefaultApplicationJSON] = field(default=None)
    
