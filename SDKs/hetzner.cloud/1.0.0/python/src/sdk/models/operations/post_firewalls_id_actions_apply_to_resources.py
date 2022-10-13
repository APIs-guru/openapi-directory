from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostFirewallsIDActionsApplyToResourcesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToFirewallApplyToResources:
    label_selector: Optional[PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToResourcesRequest:
    apply_to: List[PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToFirewallApplyToResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apply_to' }})
    

@dataclass
class PostFirewallsIDActionsApplyToResourcesRequest:
    path_params: PostFirewallsIDActionsApplyToResourcesPathParams = field(default=None)
    request: Optional[PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToResourcesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResources201ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResources201ApplicationJSONMeta:
    pagination: PostFirewallsIDActionsApplyToResources201ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResponse:
    actions: List[PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    meta: Optional[PostFirewallsIDActionsApplyToResources201ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class PostFirewallsIDActionsApplyToResourcesResponse:
    actions_response: Optional[PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
