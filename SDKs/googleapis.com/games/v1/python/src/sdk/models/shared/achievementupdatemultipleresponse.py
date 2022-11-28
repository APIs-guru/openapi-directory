from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AchievementUpdateMultipleResponse:
    r"""AchievementUpdateMultipleResponse
    Response message for UpdateMultipleAchievements rpc.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    updated_achievements: Optional[List[AchievementUpdateResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAchievements') }})
    
