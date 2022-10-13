from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attachmenteditfields


@dataclass_json
@dataclass
class AttachmentEdit:
    attachment: Optional[attachmenteditfields.AttachmentEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment' }})
    
