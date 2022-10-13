from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicecontext
from . import errorgroup
from . import errorevent
from . import timedcount


@dataclass_json
@dataclass
class ErrorGroupStats:
    affected_services: Optional[List[servicecontext.ServiceContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedServices' }})
    affected_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedUsersCount' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    first_seen_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstSeenTime' }})
    group: Optional[errorgroup.ErrorGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    last_seen_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSeenTime' }})
    num_affected_services: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numAffectedServices' }})
    representative: Optional[errorevent.ErrorEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'representative' }})
    timed_counts: Optional[List[timedcount.TimedCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timedCounts' }})
    
