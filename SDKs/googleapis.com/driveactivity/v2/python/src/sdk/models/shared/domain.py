from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Domain:
    legacy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
