from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostServersIDActionsRebuildPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRebuildRebuildServerRequest:
    image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    

@dataclass
class PostServersIDActionsRebuildRequest:
    path_params: PostServersIDActionsRebuildPathParams = field(default=None)
    request: Optional[PostServersIDActionsRebuildRebuildServerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRebuild201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRebuild201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersIDActionsRebuild201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsRebuild201ApplicationJSONAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersIDActionsRebuild201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersIDActionsRebuild201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersIDActionsRebuild201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRebuild201ApplicationJSON:
    action: Optional[PostServersIDActionsRebuild201ApplicationJSONAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_password' }})
    

@dataclass
class PostServersIDActionsRebuildResponse:
    content_type: str = field(default=None)
    post_servers_id_actions_rebuild_201_application_json_object: Optional[PostServersIDActionsRebuild201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
