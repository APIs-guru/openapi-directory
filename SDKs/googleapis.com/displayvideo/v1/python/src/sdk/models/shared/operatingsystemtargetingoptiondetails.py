from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OperatingSystemTargetingOptionDetails:
    r"""OperatingSystemTargetingOptionDetails
    Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
