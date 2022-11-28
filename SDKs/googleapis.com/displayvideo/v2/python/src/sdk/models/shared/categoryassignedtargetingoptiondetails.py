from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CategoryAssignedTargetingOptionDetails:
    r"""CategoryAssignedTargetingOptionDetails
    Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class CategoryAssignedTargetingOptionDetailsInput:
    r"""CategoryAssignedTargetingOptionDetailsInput
    Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
    """
    
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
