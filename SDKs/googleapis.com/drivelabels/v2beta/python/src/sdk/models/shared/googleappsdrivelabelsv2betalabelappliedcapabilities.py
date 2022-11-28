from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities:
    r"""GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities
    The capabilities a user has on this label's applied metadata.
    """
    
    can_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canApply') }})
    can_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRead') }})
    can_remove: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRemove') }})
    
