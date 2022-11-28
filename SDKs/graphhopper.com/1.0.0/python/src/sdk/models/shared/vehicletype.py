from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VehicleTypeNetworkDataProviderEnum(str, Enum):
    OPENSTREETMAP = "openstreetmap"
    TOMTOM = "tomtom"


@dataclass_json
@dataclass
class VehicleType:
    type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_id') }})
    capacity: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    consider_traffic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consider_traffic') }})
    cost_per_activation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_per_activation') }})
    cost_per_meter: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_per_meter') }})
    cost_per_second: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_per_second') }})
    network_data_provider: Optional[VehicleTypeNetworkDataProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_data_provider') }})
    profile: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    service_time_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_time_factor') }})
    speed_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed_factor') }})
    
