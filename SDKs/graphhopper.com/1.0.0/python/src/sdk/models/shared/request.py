from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Request:
    algorithm: Optional[Algorithm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    configuration: Optional[Configuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    cost_matrices: Optional[List[CostMatrix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_matrices') }})
    objectives: Optional[List[Objective]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectives') }})
    relations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    services: Optional[List[Service]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    shipments: Optional[List[Shipment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    vehicle_types: Optional[List[VehicleType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_types') }})
    vehicles: Optional[List[Vehicle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicles') }})
    
