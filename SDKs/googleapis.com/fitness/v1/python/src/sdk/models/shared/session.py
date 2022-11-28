from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Session:
    r"""Session
    Sessions contain metadata, such as a user-friendly name and time interval information.
    """
    
    active_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeTimeMillis') }})
    activity_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    application: Optional[Application] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeMillis') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedTimeMillis') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeMillis') }})
    
