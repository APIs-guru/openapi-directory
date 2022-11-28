from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AchievementResetAllResponse:
    r"""AchievementResetAllResponse
    Achievement reset all response.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    results: Optional[List[AchievementResetResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
