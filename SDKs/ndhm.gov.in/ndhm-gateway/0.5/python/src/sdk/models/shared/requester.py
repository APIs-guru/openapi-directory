from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RequesterIdentifier:
    system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Requester:
    identifier: Optional[RequesterIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
