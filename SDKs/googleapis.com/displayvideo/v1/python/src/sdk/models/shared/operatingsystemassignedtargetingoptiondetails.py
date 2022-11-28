from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OperatingSystemAssignedTargetingOptionDetailsInput:
    r"""OperatingSystemAssignedTargetingOptionDetailsInput
    Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
    """
    
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class OperatingSystemAssignedTargetingOptionDetails:
    r"""OperatingSystemAssignedTargetingOptionDetails
    Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
