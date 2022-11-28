from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectionRule:
    r"""GooglePrivacyDlpV2InspectionRule
    A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
    """
    
    exclusion_rule: Optional[GooglePrivacyDlpV2ExclusionRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionRule') }})
    hotword_rule: Optional[GooglePrivacyDlpV2HotwordRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotwordRule') }})
    
