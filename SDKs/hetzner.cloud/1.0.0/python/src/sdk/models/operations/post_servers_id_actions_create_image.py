from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostServersIDActionsCreateImagePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImageCreateImageRequestLabels:
    r"""PostServersIDActionsCreateImageCreateImageRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    
class PostServersIDActionsCreateImageCreateImageRequestTypeEnum(str, Enum):
    SNAPSHOT = "snapshot"
    BACKUP = "backup"


@dataclass_json
@dataclass
class PostServersIDActionsCreateImageCreateImageRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[PostServersIDActionsCreateImageCreateImageRequestLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    type: Optional[PostServersIDActionsCreateImageCreateImageRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONActionError:
    r"""PostServersIDActionsCreateImage201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsCreateImage201ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostServersIDActionsCreateImage201ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom:
    r"""PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImageProtection:
    r"""PostServersIDActionsCreateImage201ApplicationJSONImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
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
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: PostServersIDActionsCreateImage201ApplicationJSONImageProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsCreateImage201ApplicationJSON:
    action: Optional[PostServersIDActionsCreateImage201ApplicationJSONAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    image: Optional[PostServersIDActionsCreateImage201ApplicationJSONImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    

@dataclass
class PostServersIDActionsCreateImageRequest:
    path_params: PostServersIDActionsCreateImagePathParams = field()
    request: Optional[PostServersIDActionsCreateImageCreateImageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostServersIDActionsCreateImageResponse:
    content_type: str = field()
    status_code: int = field()
    post_servers_id_actions_create_image_201_application_json_object: Optional[PostServersIDActionsCreateImage201ApplicationJSON] = field(default=None)
    
