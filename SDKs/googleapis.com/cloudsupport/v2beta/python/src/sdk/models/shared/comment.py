from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actor


@dataclass_json
@dataclass
class Comment:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[actor.Actor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    plain_text_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plainTextBody' }})
    
