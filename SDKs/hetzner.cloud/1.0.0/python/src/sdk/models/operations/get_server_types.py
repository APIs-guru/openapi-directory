from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetServerTypesQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    
class GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly:
    r"""GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly:
    r"""GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypesPrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypes:
    cores: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetServerTypes200ApplicationJSONServerTypesPrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    

@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSON:
    server_types: List[GetServerTypes200ApplicationJSONServerTypes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass
class GetServerTypesRequest:
    query_params: GetServerTypesQueryParams = field()
    

@dataclass
class GetServerTypesResponse:
    content_type: str = field()
    status_code: int = field()
    get_server_types_200_application_json_object: Optional[GetServerTypes200ApplicationJSON] = field(default=None)
    
