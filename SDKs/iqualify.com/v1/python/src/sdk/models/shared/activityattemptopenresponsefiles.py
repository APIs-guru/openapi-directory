from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivityAttemptOpenResponseFiles:
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    mimetype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimetype' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
