from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetDatacentersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetDatacentersID200ApplicationJSONDatacenterLocation:
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
class GetDatacentersID200ApplicationJSONDatacenterServerTypes:
    r"""GetDatacentersID200ApplicationJSONDatacenterServerTypes
    The Server types the Datacenter can handle
    """
    
    available: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclass
class GetDatacentersID200ApplicationJSONDatacenter:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: GetDatacentersID200ApplicationJSONDatacenterLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: GetDatacentersID200ApplicationJSONDatacenterServerTypes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclass
class GetDatacentersID200ApplicationJSON:
    datacenter: GetDatacentersID200ApplicationJSONDatacenter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    

@dataclass
class GetDatacentersIDRequest:
    path_params: GetDatacentersIDPathParams = field()
    

@dataclass
class GetDatacentersIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_datacenters_id_200_application_json_object: Optional[GetDatacentersID200ApplicationJSON] = field(default=None)
    
