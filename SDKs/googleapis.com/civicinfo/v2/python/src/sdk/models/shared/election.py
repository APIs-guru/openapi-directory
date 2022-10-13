from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ElectionShapeLookupBehaviorEnum(str, Enum):
    SHAPE_LOOKUP_DEFAULT = "shapeLookupDefault"
    SHAPE_LOOKUP_DISABLED = "shapeLookupDisabled"
    SHAPE_LOOKUP_ENABLED = "shapeLookupEnabled"


@dataclass_json
@dataclass
class Election:
    election_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionDay' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ocd_division_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ocdDivisionId' }})
    shape_lookup_behavior: Optional[ElectionShapeLookupBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shapeLookupBehavior' }})
    
