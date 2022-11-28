from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostVolumesCreateVolumeRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    automount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automount') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    server: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass_json
@dataclass
class PostVolumes201ApplicationJSONActionError:
    r"""PostVolumes201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostVolumes201ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostVolumes201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostVolumes201ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostVolumes201ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostVolumes201ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostVolumes201ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostVolumes201ApplicationJSONVolumeLocation:
    r"""PostVolumes201ApplicationJSONVolumeLocation
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
class PostVolumes201ApplicationJSONVolumeProtection:
    r"""PostVolumes201ApplicationJSONVolumeProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class PostVolumes201ApplicationJSONVolumeStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclass
class PostVolumes201ApplicationJSONVolume:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    format: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_device: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linux_device') }})
    location: PostVolumes201ApplicationJSONVolumeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PostVolumes201ApplicationJSONVolumeProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: PostVolumes201ApplicationJSONVolumeStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostVolumes201ApplicationJSON:
    action: PostVolumes201ApplicationJSONAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    next_actions: List[PostVolumes201ApplicationJSONAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_actions') }})
    volume: PostVolumes201ApplicationJSONVolume = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclass
class PostVolumesRequest:
    request: Optional[PostVolumesCreateVolumeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVolumesResponse:
    content_type: str = field()
    status_code: int = field()
    post_volumes_201_application_json_object: Optional[PostVolumes201ApplicationJSON] = field(default=None)
    
