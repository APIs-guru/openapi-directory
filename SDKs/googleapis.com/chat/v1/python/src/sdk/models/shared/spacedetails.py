from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SpaceDetails:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    guidelines: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guidelines' }})
    
