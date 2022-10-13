from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FormatComplexity:
    lod_hint: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lodHint' }})
    triangle_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triangleCount' }})
    
