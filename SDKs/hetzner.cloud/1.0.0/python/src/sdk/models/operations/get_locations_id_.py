from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLocationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetLocationsID200ApplicationJSONLocation:
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
class GetLocationsID200ApplicationJSON:
    location: GetLocationsID200ApplicationJSONLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    

@dataclass
class GetLocationsIDRequest:
    path_params: GetLocationsIDPathParams = field()
    

@dataclass
class GetLocationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_locations_id_200_application_json_object: Optional[GetLocationsID200ApplicationJSON] = field(default=None)
    
