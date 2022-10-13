from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostNetworksIDActionsAddSubnetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostNetworksIDActionsAddSubnetRequestBodyTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnetRequestBodyAddSubnetRequest:
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    type: PostNetworksIDActionsAddSubnetRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vswitch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vswitch_id' }})
    

@dataclass
class PostNetworksIDActionsAddSubnetRequest:
    path_params: PostNetworksIDActionsAddSubnetPathParams = field(default=None)
    request: Optional[PostNetworksIDActionsAddSubnetRequestBodyAddSubnetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnet201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnet201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnet201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostNetworksIDActionsAddSubnet201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostNetworksIDActionsAddSubnet201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnet201ApplicationJSONActionResponse:
    action: PostNetworksIDActionsAddSubnet201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostNetworksIDActionsAddSubnetResponse:
    action_response: Optional[PostNetworksIDActionsAddSubnet201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
