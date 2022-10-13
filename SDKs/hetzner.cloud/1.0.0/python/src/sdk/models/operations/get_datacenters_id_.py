from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDatacentersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatacentersIDRequest:
    path_params: GetDatacentersIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDatacentersID200ApplicationJSONDatacenterLocation:
    city: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    

@dataclass_json
@dataclass
class GetDatacentersID200ApplicationJSONDatacenterServerTypes:
    available: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_for_migration: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_migration' }})
    supported: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    

@dataclass_json
@dataclass
class GetDatacentersID200ApplicationJSONDatacenter:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: GetDatacentersID200ApplicationJSONDatacenterLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_types: GetDatacentersID200ApplicationJSONDatacenterServerTypes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    

@dataclass_json
@dataclass
class GetDatacentersID200ApplicationJSON:
    datacenter: GetDatacentersID200ApplicationJSONDatacenter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenter' }})
    

@dataclass
class GetDatacentersIDResponse:
    content_type: str = field(default=None)
    get_datacenters_id_200_application_json_object: Optional[GetDatacentersID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
