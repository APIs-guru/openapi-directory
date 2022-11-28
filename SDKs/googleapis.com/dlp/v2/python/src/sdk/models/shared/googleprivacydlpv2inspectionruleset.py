from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectionRuleSet:
    r"""GooglePrivacyDlpV2InspectionRuleSet
    Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
    """
    
    info_types: Optional[List[GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    rules: Optional[List[GooglePrivacyDlpV2InspectionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
