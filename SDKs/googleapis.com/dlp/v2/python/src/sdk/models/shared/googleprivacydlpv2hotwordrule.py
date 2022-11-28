from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HotwordRule:
    r"""GooglePrivacyDlpV2HotwordRule
    The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
    """
    
    hotword_regex: Optional[GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotwordRegex') }})
    likelihood_adjustment: Optional[GooglePrivacyDlpV2LikelihoodAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likelihoodAdjustment') }})
    proximity: Optional[GooglePrivacyDlpV2Proximity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximity') }})
    
