from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeywordAssignedTargetingOptionDetails:
    r"""KeywordAssignedTargetingOptionDetails
    Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
    """
    
    keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyword') }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    
