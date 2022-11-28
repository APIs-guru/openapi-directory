from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy:
    r"""GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy
    The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
    """
    
    hide_in_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideInSearch') }})
    show_in_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showInApply') }})
    
