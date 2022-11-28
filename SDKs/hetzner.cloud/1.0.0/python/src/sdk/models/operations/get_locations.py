from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLocationsQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLocations200ApplicationJSONLocations:
    city: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclass
class GetLocations200ApplicationJSON:
    locations: List[GetLocations200ApplicationJSONLocations] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    

@dataclass
class GetLocationsRequest:
    query_params: GetLocationsQueryParams = field()
    

@dataclass
class GetLocationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_locations_200_application_json_object: Optional[GetLocations200ApplicationJSON] = field(default=None)
    
