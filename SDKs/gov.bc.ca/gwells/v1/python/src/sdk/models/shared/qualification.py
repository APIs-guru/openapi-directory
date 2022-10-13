from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Qualification:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    well_class: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'well_class' }})
    
