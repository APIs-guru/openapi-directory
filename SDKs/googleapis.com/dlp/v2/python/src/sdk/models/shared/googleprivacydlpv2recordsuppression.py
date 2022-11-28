from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordSuppression:
    r"""GooglePrivacyDlpV2RecordSuppression
    Configuration to suppress records whose suppression conditions evaluate to true.
    """
    
    condition: Optional[GooglePrivacyDlpV2RecordCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    
