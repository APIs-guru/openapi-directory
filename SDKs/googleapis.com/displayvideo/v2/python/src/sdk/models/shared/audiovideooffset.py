from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AudioVideoOffset:
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seconds' }})
    
