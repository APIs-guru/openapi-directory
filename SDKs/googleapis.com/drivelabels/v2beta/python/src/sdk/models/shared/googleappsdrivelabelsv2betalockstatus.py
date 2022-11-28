from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLockStatus:
    r"""GoogleAppsDriveLabelsV2betaLockStatus
    Contains information about whether a label component should be considered locked.
    """
    
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    
