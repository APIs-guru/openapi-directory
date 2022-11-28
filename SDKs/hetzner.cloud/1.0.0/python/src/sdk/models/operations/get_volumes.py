from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetVolumesSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetVolumesStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"


@dataclass
class GetVolumesQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetVolumesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetVolumesStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONMeta:
    pagination: GetVolumes200ApplicationJSONMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONVolumesLocation:
    r"""GetVolumes200ApplicationJSONVolumesLocation
    Location of the Volume. Volume can only be attached to Servers in the same Location.
    """
    
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
class GetVolumes200ApplicationJSONVolumesProtection:
    r"""GetVolumes200ApplicationJSONVolumesProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetVolumes200ApplicationJSONVolumesStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONVolumes:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    format: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_device: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linux_device') }})
    location: GetVolumes200ApplicationJSONVolumesLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetVolumes200ApplicationJSONVolumesProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: GetVolumes200ApplicationJSONVolumesStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSON:
    volumes: List[GetVolumes200ApplicationJSONVolumes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    meta: Optional[GetVolumes200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetVolumesRequest:
    query_params: GetVolumesQueryParams = field()
    

@dataclass
class GetVolumesResponse:
    content_type: str = field()
    status_code: int = field()
    get_volumes_200_application_json_object: Optional[GetVolumes200ApplicationJSON] = field(default=None)
    
