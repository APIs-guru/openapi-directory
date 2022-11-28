from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FirstAndThirdPartyAudienceGroup:
    r"""FirstAndThirdPartyAudienceGroup
    Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[List[FirstAndThirdPartyAudienceTargetingSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
