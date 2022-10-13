from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import author


@dataclass_json
@dataclass
class Answer:
    author: Optional[author.Author] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upvote_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upvoteCount' }})
    
