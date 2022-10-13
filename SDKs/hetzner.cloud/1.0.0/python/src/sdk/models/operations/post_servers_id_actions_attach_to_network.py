from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostServersIDActionsAttachToNetworkPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachToNetworkRequestBodyAttachToNetworkRequest:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias_ips' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    network: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass
class PostServersIDActionsAttachToNetworkRequest:
    path_params: PostServersIDActionsAttachToNetworkPathParams = field(default=None)
    request: Optional[PostServersIDActionsAttachToNetworkRequestBodyAttachToNetworkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachToNetwork201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachToNetwork201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsAttachToNetwork201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersIDActionsAttachToNetwork201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersIDActionsAttachToNetwork201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachToNetwork201ApplicationJSONActionResponse:
    action: PostServersIDActionsAttachToNetwork201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostServersIDActionsAttachToNetworkResponse:
    action_response: Optional[PostServersIDActionsAttachToNetwork201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
