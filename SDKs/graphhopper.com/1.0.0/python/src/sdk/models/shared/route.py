from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Route:
    activities: Optional[List[Activity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    completion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion_time') }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    points: Optional[List[RoutePoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    preparation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparation_time') }})
    service_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_duration') }})
    transport_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_time') }})
    vehicle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_id') }})
    waiting_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time') }})
    
