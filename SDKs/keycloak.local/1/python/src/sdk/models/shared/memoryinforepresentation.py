from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MemoryInfoRepresentation:
    free: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    free_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeFormated' }})
    free_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freePercentage' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFormated' }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    used_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedFormated' }})
    
