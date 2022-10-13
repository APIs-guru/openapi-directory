from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostServersIDActionsPoweronPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostServersIDActionsPoweronRequest:
    path_params: PostServersIDActionsPoweronPathParams = field(default=None)
    

@dataclass_json
@dataclass
class PostServersIDActionsPoweron201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsPoweron201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersIDActionsPoweron201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsPoweron201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersIDActionsPoweron201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersIDActionsPoweron201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersIDActionsPoweron201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsPoweron201ApplicationJSONActionResponse:
    action: PostServersIDActionsPoweron201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostServersIDActionsPoweronResponse:
    action_response: Optional[PostServersIDActionsPoweron201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
