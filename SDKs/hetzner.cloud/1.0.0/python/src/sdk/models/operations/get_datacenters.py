from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDatacentersQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDatacentersRequest:
    query_params: GetDatacentersQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDatacenters200ApplicationJSONDatacentersLocation:
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
class GetDatacenters200ApplicationJSONDatacentersServerTypes:
    available: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_for_migration: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_migration' }})
    supported: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    

@dataclass_json
@dataclass
class GetDatacenters200ApplicationJSONDatacenters:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: GetDatacenters200ApplicationJSONDatacentersLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_types: GetDatacenters200ApplicationJSONDatacentersServerTypes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    

@dataclass_json
@dataclass
class GetDatacenters200ApplicationJSON:
    datacenters: List[GetDatacenters200ApplicationJSONDatacenters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenters' }})
    recommendation: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendation' }})
    

@dataclass
class GetDatacentersResponse:
    content_type: str = field(default=None)
    get_datacenters_200_application_json_object: Optional[GetDatacenters200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
