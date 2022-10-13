from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import standard


@dataclass_json
@dataclass
class Strategy:
    standard: Optional[standard.Standard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standard' }})
    
