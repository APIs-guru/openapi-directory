from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attachmentfields


@dataclass_json
@dataclass
class Attachment:
    attachment: Optional[attachmentfields.AttachmentFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment' }})
    
