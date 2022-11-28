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
class AchievementUpdateMultipleRequest:
    r"""AchievementUpdateMultipleRequest
    A list of achievement update requests.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    updates: Optional[List[AchievementUpdateRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updates') }})
    
