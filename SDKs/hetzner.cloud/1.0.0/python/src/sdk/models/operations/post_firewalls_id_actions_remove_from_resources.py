from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostFirewallsIDActionsRemoveFromResourcesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromFirewallRemoveFromResources:
    label_selector: Optional[PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromResourcesRequest:
    remove_from: List[PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromFirewallRemoveFromResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remove_from' }})
    

@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequest:
    path_params: PostFirewallsIDActionsRemoveFromResourcesPathParams = field(default=None)
    request: Optional[PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromResourcesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMeta:
    pagination: PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResponse:
    actions: List[PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    meta: Optional[PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class PostFirewallsIDActionsRemoveFromResourcesResponse:
    actions_response: Optional[PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
