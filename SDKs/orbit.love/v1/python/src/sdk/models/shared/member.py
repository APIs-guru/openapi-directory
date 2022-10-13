from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Member:
    bio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    birthday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday' }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    devto: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devto' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    github: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    linkedin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedin' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pronouns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pronouns' }})
    shipping_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    tag_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_list' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tags_to_add: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags_to_add' }})
    teammate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teammate' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    tshirt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tshirt' }})
    twitter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twitter' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
