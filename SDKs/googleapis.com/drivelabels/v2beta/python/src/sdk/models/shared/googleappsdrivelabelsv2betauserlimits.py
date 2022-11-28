from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaUserLimits:
    r"""GoogleAppsDriveLabelsV2betaUserLimits
    Limits for Field.Type.USER.
    """
    
    list_limits: Optional[GoogleAppsDriveLabelsV2betaListLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listLimits') }})
    
