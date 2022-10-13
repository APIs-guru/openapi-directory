from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetImagesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagesIDRequest:
    path_params: GetImagesIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetImagesID200ApplicationJSONImageCreatedFrom:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class GetImagesID200ApplicationJSONImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetImagesID200ApplicationJSONImageProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class GetImagesID200ApplicationJSONImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetImagesID200ApplicationJSONImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class GetImagesID200ApplicationJSONImage:
    bound_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bound_to' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_id' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    created_from: GetImagesID200ApplicationJSONImageCreatedFrom = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_from' }})
    deleted: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_size' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_size' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_flavor: GetImagesID200ApplicationJSONImageOsFlavorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_flavor' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_version' }})
    protection: GetImagesID200ApplicationJSONImageProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rapid_deploy' }})
    status: GetImagesID200ApplicationJSONImageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: GetImagesID200ApplicationJSONImageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetImagesID200ApplicationJSON:
    image: Optional[GetImagesID200ApplicationJSONImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    

@dataclass
class GetImagesIDResponse:
    content_type: str = field(default=None)
    get_images_id_200_application_json_object: Optional[GetImagesID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
