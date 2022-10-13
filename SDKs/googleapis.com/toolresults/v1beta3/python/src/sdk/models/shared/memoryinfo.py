from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MemoryInfo:
    memory_cap_in_kibibyte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryCapInKibibyte' }})
    memory_total_in_kibibyte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryTotalInKibibyte' }})
    
