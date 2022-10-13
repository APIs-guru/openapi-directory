from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLocationsQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLocationsRequest:
    query_params: GetLocationsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLocations200ApplicationJSONLocations:
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
class GetLocations200ApplicationJSON:
    locations: List[GetLocations200ApplicationJSONLocations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    

@dataclass
class GetLocationsResponse:
    content_type: str = field(default=None)
    get_locations_200_application_json_object: Optional[GetLocations200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
