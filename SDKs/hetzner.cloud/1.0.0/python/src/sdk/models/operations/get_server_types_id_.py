from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetServerTypesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServerTypesIDRequest:
    path_params: GetServerTypesIDPathParams = field(default=None)
    
class GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    
class GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSONServerType:
    cores: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cores' }})
    cpu_type: GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    deprecated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memory: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetServerTypesID200ApplicationJSONServerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    storage_type: GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_type' }})
    

@dataclass_json
@dataclass
class GetServerTypesID200ApplicationJSON:
    server_type: GetServerTypesID200ApplicationJSONServerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_type' }})
    

@dataclass
class GetServerTypesIDResponse:
    content_type: str = field(default=None)
    get_server_types_id_200_application_json_object: Optional[GetServerTypesID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
