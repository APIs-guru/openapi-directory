from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceMakeModelTargetingOptionDetails:
    r"""DeviceMakeModelTargetingOptionDetails
    Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
