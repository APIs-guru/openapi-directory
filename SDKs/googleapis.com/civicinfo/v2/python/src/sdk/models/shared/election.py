from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ElectionShapeLookupBehaviorEnum(str, Enum):
    SHAPE_LOOKUP_DEFAULT = "shapeLookupDefault"
    SHAPE_LOOKUP_DISABLED = "shapeLookupDisabled"
    SHAPE_LOOKUP_ENABLED = "shapeLookupEnabled"


@dataclass_json
@dataclass
class Election:
    r"""Election
    Information about the election that was queried.
    """
    
    election_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionDay') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ocd_division_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ocdDivisionId') }})
    shape_lookup_behavior: Optional[ElectionShapeLookupBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeLookupBehavior') }})
    
