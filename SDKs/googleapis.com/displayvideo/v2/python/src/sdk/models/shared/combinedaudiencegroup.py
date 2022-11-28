from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CombinedAudienceGroup:
    r"""CombinedAudienceGroup
    Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[List[CombinedAudienceTargetingSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
