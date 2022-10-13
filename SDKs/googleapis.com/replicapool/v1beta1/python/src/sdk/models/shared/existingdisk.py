from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import diskattachment


@dataclass_json
@dataclass
class ExistingDisk:
    attachment: Optional[diskattachment.DiskAttachment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
