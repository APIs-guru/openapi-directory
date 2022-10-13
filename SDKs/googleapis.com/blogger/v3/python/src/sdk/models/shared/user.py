from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserBlogs:
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    

@dataclass_json
@dataclass
class UserLocale:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    variant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variant' }})
    

@dataclass_json
@dataclass
class User:
    about: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'about' }})
    blogs: Optional[UserBlogs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blogs' }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    locale: Optional[UserLocale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
