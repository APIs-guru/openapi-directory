from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DetectionRule:
    r"""GooglePrivacyDlpV2DetectionRule
    Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.
    """
    
    hotword_rule: Optional[GooglePrivacyDlpV2HotwordRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotwordRule') }})
    
