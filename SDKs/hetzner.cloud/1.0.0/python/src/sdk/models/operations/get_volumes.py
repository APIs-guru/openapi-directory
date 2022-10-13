from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    

@dataclass
class GetVolumesRequest:
    query_params: GetVolumesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONMeta:
    pagination: GetVolumes200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONVolumesLocation:
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
class GetVolumes200ApplicationJSONVolumesProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class GetVolumes200ApplicationJSONVolumesStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclass
class GetVolumes200ApplicationJSONVolumes:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    format: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    linux_device: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linux_device' }})
    location: GetVolumes200ApplicationJSONVolumesLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: GetVolumes200ApplicationJSONVolumesProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    server: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: GetVolumes200ApplicationJSONVolumesStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSON:
    meta: Optional[GetVolumes200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    volumes: List[GetVolumes200ApplicationJSONVolumes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass
class GetVolumesResponse:
    content_type: str = field(default=None)
    get_volumes_200_application_json_object: Optional[GetVolumes200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
