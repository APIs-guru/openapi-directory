from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorGroupStats:
    r"""ErrorGroupStats
    Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.
    """
    
    affected_services: Optional[List[ServiceContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedServices') }})
    affected_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedUsersCount') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    first_seen_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstSeenTime') }})
    group: Optional[ErrorGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    last_seen_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeenTime') }})
    num_affected_services: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numAffectedServices') }})
    representative: Optional[ErrorEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('representative') }})
    timed_counts: Optional[List[TimedCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timedCounts') }})
    
