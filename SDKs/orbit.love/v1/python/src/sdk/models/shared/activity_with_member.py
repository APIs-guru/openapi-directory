from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import member


@dataclass_json
@dataclass
class ActivityWithMember:
    activity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity_type' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_text' }})
    member: Optional[member.Member] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurred_at' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
