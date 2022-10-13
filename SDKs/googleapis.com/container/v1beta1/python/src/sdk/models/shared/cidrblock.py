from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CidrBlock:
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrBlock' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    
