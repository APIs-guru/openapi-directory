from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostFirewallsIDActionsRemoveFromResourcesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources:
    label_selector: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest:
    remove_from: List[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remove_from' }})
    

@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequest:
    path_params: PostFirewallsIDActionsRemoveFromResourcesPathParams = field(default=None)
    request: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta:
    pagination: PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponse:
    actions: List[PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    meta: Optional[PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class PostFirewallsIDActionsRemoveFromResourcesResponse:
    actions_response: Optional[PostFirewallsIDActionsRemoveFromResourcesActionsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
