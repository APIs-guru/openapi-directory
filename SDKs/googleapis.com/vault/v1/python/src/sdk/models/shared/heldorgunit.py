from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HeldOrgUnit:
    r"""HeldOrgUnit
    The organizational unit covered by a hold. This structure is immutable.
    """
    
    hold_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdTime') }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    
