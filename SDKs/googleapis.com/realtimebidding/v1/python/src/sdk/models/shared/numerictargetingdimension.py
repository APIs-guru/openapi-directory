from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NumericTargetingDimension:
    r"""NumericTargetingDimension
    Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
    """
    
    excluded_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedIds') }})
    included_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedIds') }})
    
