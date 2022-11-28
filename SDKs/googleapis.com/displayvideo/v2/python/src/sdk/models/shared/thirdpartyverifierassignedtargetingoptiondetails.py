from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThirdPartyVerifierAssignedTargetingOptionDetails:
    r"""ThirdPartyVerifierAssignedTargetingOptionDetails
    Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
    """
    
    adloox: Optional[Adloox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adloox') }})
    double_verify: Optional[DoubleVerify] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleVerify') }})
    integral_ad_science: Optional[IntegralAdScience] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integralAdScience') }})
    
