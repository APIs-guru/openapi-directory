from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import messagepartbody
from . import messagepartheader
from . import messagepart


@dataclass_json
@dataclass
class MessagePart:
    body: Optional[messagepartbody.MessagePartBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    headers: Optional[List[messagepartheader.MessagePartHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    part_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partId' }})
    parts: Optional[List[messagepart.MessagePart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    
