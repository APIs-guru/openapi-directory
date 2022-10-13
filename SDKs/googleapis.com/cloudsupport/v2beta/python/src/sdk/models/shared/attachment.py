from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actor


@dataclass_json
@dataclass
class Attachment:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[actor.Actor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    
