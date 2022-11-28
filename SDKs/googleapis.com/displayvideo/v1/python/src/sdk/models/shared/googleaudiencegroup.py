from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAudienceGroup:
    r"""GoogleAudienceGroup
    Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[List[GoogleAudienceTargetingSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
