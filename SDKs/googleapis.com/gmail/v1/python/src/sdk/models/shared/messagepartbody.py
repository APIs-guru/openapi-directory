from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MessagePartBody:
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentId' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
