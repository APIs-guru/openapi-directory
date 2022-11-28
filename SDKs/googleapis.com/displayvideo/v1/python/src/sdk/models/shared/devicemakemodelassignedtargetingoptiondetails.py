from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceMakeModelAssignedTargetingOptionDetails:
    r"""DeviceMakeModelAssignedTargetingOptionDetails
    Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class DeviceMakeModelAssignedTargetingOptionDetailsInput:
    r"""DeviceMakeModelAssignedTargetingOptionDetailsInput
    Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
    """
    
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
