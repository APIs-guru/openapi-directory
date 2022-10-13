from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLocationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLocationsIDRequest:
    path_params: GetLocationsIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLocationsID200ApplicationJSONLocation:
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
class GetLocationsID200ApplicationJSON:
    location: GetLocationsID200ApplicationJSONLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    

@dataclass
class GetLocationsIDResponse:
    content_type: str = field(default=None)
    get_locations_id_200_application_json_object: Optional[GetLocationsID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
