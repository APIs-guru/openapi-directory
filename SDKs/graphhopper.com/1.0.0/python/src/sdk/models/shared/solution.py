from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SolutionUnassigned:
    breaks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breaks') }})
    details: Optional[List[Detail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    shipments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    

@dataclass_json
@dataclass
class Solution:
    r"""Solution
    Only available if status field indicates `finished`.
    """
    
    completion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion_time') }})
    costs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costs') }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    max_operation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_operation_time') }})
    no_unassigned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no_unassigned') }})
    no_vehicles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no_vehicles') }})
    preparation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparation_time') }})
    routes: Optional[List[Route]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    service_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_duration') }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    transport_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_time') }})
    unassigned: Optional[SolutionUnassigned] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unassigned') }})
    waiting_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time') }})
    
