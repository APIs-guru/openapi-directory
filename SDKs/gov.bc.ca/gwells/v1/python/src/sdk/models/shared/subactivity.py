from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import qualification


@dataclass_json
@dataclass
class Subactivity:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    qualification_set: Optional[List[qualification.Qualification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qualification_set' }})
    registries_subactivity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registries_subactivity_code' }})
    
