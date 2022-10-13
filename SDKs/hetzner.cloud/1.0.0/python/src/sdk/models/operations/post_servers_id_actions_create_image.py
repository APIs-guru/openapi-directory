from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostServersIDActionsCreateImagePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImageRequestBodyLabels:
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelkey' }})
    
class PostServersIDActionsCreateImageRequestBodyTypeEnum(str, Enum):
    SNAPSHOT = "snapshot"
    BACKUP = "backup"


@dataclass_json
@dataclass
class PostServersIDActionsCreateImageRequestBodyCreateImageRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[PostServersIDActionsCreateImageRequestBodyLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    type: Optional[PostServersIDActionsCreateImageRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostServersIDActionsCreateImageRequest:
    path_params: PostServersIDActionsCreateImagePathParams = field(default=None)
    request: Optional[PostServersIDActionsCreateImageRequestBodyCreateImageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersIDActionsCreateImage201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersIDActionsCreateImage201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImageProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImage:
    bound_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bound_to' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_id' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    created_from: PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_from' }})
    deleted: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_size' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_size' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_flavor: PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_flavor' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_version' }})
    protection: PostServersIDActionsCreateImage201ApplicationJSONImageProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rapid_deploy' }})
    status: PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSON:
    action: Optional[PostServersIDActionsCreateImage201ApplicationJSONActionAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    image: Optional[PostServersIDActionsCreateImage201ApplicationJSONImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    

@dataclass
class PostServersIDActionsCreateImageResponse:
    content_type: str = field(default=None)
    post_servers_id_actions_create_image_201_application_json_object: Optional[PostServersIDActionsCreateImage201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
