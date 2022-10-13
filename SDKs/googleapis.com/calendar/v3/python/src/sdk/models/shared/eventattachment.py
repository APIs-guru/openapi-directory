from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventAttachment:
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileId' }})
    file_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUrl' }})
    icon_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconLink' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
