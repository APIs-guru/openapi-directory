from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostNetworksIDActionsAddRoutePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddRouteRequestBodyAddDeleteRouteRequest:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    

@dataclass
class PostNetworksIDActionsAddRouteRequest:
    path_params: PostNetworksIDActionsAddRoutePathParams = field(default=None)
    request: Optional[PostNetworksIDActionsAddRouteRequestBodyAddDeleteRouteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddRoute201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddRoute201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostNetworksIDActionsAddRoute201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostNetworksIDActionsAddRoute201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostNetworksIDActionsAddRoute201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddRoute201ApplicationJSONActionResponse:
    action: PostNetworksIDActionsAddRoute201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostNetworksIDActionsAddRouteResponse:
    action_response: Optional[PostNetworksIDActionsAddRoute201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
