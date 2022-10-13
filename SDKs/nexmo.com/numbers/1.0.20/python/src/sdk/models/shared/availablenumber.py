from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Availablenumber:
    cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    msisdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msisdn' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
