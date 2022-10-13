from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attachment


@dataclass_json
@dataclass
class CreateAttachmentRequest:
    attachment: Optional[attachment.Attachment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment' }})
    
