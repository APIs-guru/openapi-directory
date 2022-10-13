from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyPoints:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    points_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointsValue' }})
    ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    
