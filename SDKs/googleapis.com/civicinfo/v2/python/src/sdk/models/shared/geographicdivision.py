from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeographicDivision:
    also_known_as: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alsoKnownAs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    office_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'officeIndices' }})
    
