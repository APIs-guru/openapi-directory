from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import adloox
from . import doubleverify
from . import integraladscience


@dataclass_json
@dataclass
class ThirdPartyVerifierAssignedTargetingOptionDetails:
    adloox: Optional[adloox.Adloox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adloox' }})
    double_verify: Optional[doubleverify.DoubleVerify] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleVerify' }})
    integral_ad_science: Optional[integraladscience.IntegralAdScience] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integralAdScience' }})
    
