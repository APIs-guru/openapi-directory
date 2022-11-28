from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelLockCapabilities:
    r"""GoogleAppsDriveLabelsV2betaLabelLockCapabilities
    A description of a user's capabilities on a LabelLock.
    """
    
    can_view_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canViewPolicy') }})
    
