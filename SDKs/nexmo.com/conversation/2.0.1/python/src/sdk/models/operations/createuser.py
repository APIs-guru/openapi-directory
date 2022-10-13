from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateUserRequestBody:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateUserRequest:
    request: Optional[CreateUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateUser200ApplicationJSON:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass
class CreateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_user_200_application_json_object: Optional[CreateUser200ApplicationJSON] = field(default=None)
    
