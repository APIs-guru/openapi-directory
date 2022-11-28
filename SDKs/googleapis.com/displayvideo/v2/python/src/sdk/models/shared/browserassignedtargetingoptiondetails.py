from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BrowserAssignedTargetingOptionDetails:
    r"""BrowserAssignedTargetingOptionDetails
    Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class BrowserAssignedTargetingOptionDetailsInput:
    r"""BrowserAssignedTargetingOptionDetailsInput
    Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
    """
    
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
