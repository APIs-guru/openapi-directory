from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Conditions:
    r"""GooglePrivacyDlpV2Conditions
    A collection of conditions.
    """
    
    conditions: Optional[List[GooglePrivacyDlpV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    
