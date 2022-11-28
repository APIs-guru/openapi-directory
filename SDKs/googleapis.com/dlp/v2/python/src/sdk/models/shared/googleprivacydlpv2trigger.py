from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Trigger:
    r"""GooglePrivacyDlpV2Trigger
    What event needs to occur for a new job to be started.
    """
    
    manual: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manual') }})
    schedule: Optional[GooglePrivacyDlpV2Schedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
