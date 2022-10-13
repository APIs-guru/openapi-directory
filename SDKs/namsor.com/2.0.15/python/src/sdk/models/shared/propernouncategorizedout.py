from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProperNounCategorizedOut:
    common_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonType' }})
    common_type_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonTypeAlt' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    
