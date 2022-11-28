from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Proximity:
    r"""GooglePrivacyDlpV2Proximity
    Message for specifying a window around a finding to apply a detection rule.
    """
    
    window_after: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowAfter') }})
    window_before: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowBefore') }})
    
