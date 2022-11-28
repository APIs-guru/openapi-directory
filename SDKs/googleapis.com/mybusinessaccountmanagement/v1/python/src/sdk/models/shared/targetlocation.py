from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TargetLocation:
    r"""TargetLocation
    Represents a target location for a pending invitation.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    
