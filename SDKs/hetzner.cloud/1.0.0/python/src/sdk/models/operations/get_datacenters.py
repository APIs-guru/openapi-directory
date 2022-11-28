from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetDatacentersQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetDatacenters200ApplicationJSONDatacentersLocation:
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
class GetDatacenters200ApplicationJSONDatacentersServerTypes:
    r"""GetDatacenters200ApplicationJSONDatacentersServerTypes
    The Server types the Datacenter can handle
    """
    
    available: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclass
class GetDatacenters200ApplicationJSONDatacenters:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: GetDatacenters200ApplicationJSONDatacentersLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: GetDatacenters200ApplicationJSONDatacentersServerTypes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclass
class GetDatacenters200ApplicationJSON:
    datacenters: List[GetDatacenters200ApplicationJSONDatacenters] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenters') }})
    recommendation: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    

@dataclass
class GetDatacentersRequest:
    query_params: GetDatacentersQueryParams = field()
    

@dataclass
class GetDatacentersResponse:
    content_type: str = field()
    status_code: int = field()
    get_datacenters_200_application_json_object: Optional[GetDatacenters200ApplicationJSON] = field(default=None)
    
