from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UsePurpose:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    ref_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refUri' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
