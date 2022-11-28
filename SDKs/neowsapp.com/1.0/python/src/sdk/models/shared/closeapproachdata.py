from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloseApproachData:
    close_approach_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_approach_date') }})
    close_approach_date_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_approach_date_full') }})
    epoch_date_close_approach: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epoch_date_close_approach') }})
    miss_distance: Optional[MissDistance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miss_distance') }})
    orbiting_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orbiting_body') }})
    relative_velocity: Optional[RelVelocity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relative_velocity') }})
    
