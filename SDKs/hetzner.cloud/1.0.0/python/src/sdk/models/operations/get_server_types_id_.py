from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetServerTypesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly:
    r"""GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly:
    r"""GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerType:
    cores: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetServerTypesID200ApplicationJSONServerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    

@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSON:
    server_type: GetServerTypesID200ApplicationJSONServerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    

@dataclass
class GetServerTypesIDRequest:
    path_params: GetServerTypesIDPathParams = field()
    

@dataclass
class GetServerTypesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_server_types_id_200_application_json_object: Optional[GetServerTypesID200ApplicationJSON] = field(default=None)
    
