from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutVolumesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutVolumesIDRequestBodyLabels:
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelkey' }})
    

@dataclass_json
@dataclass
class PutVolumesIDRequestBodyUpdateVolumeRequest:
    labels: Optional[PutVolumesIDRequestBodyLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutVolumesIDRequest:
    path_params: PutVolumesIDPathParams = field(default=None)
    request: Optional[PutVolumesIDRequestBodyUpdateVolumeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutVolumesID200ApplicationJSONVolumeLocation:
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
class PutVolumesID200ApplicationJSONVolumeProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class PutVolumesID200ApplicationJSONVolumeStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclass
class PutVolumesID200ApplicationJSONVolume:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    format: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    linux_device: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linux_device' }})
    location: PutVolumesID200ApplicationJSONVolumeLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: PutVolumesID200ApplicationJSONVolumeProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    server: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: PutVolumesID200ApplicationJSONVolumeStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PutVolumesID200ApplicationJSON:
    volume: PutVolumesID200ApplicationJSONVolume = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    

@dataclass
class PutVolumesIDResponse:
    content_type: str = field(default=None)
    put_volumes_id_200_application_json_object: Optional[PutVolumesID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
