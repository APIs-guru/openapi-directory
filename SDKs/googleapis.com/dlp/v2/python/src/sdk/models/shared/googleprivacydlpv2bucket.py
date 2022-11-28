from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Bucket:
    r"""GooglePrivacyDlpV2Bucket
    Bucket is represented as a range, along with replacement values.
    """
    
    max: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    replacement_value: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementValue') }})
    
