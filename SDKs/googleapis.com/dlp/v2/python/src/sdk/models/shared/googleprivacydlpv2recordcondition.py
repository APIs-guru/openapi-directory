from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordCondition:
    r"""GooglePrivacyDlpV2RecordCondition
    A condition for determining whether a transformation should be applied to a field.
    """
    
    expressions: Optional[GooglePrivacyDlpV2Expressions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressions') }})
    
