from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoOffset:
    offset_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetPercentage' }})
    offset_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetSeconds' }})
    
