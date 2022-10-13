from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Office:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    voice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    
