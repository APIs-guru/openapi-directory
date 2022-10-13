from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetServerTypesQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServerTypesRequest:
    query_params: GetServerTypesQueryParams = field(default=None)
    
class GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypesPrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    
class GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSONServerTypes:
    cores: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cores' }})
    cpu_type: GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    deprecated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memory: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetServerTypes200ApplicationJSONServerTypesPrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    storage_type: GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_type' }})
    

@dataclass_json
@dataclass
class GetServerTypes200ApplicationJSON:
    server_types: List[GetServerTypes200ApplicationJSONServerTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    

@dataclass
class GetServerTypesResponse:
    content_type: str = field(default=None)
    get_server_types_200_application_json_object: Optional[GetServerTypes200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
