from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostFirewallsIDActionsApplyToResourcesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources:
    label_selector: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest:
    apply_to: List[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apply_to' }})
    

@dataclass
class PostFirewallsIDActionsApplyToResourcesRequest:
    path_params: PostFirewallsIDActionsApplyToResourcesPathParams = field(default=None)
    request: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostFirewallsIDActionsApplyToResourcesActionsResponseActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseMeta:
    pagination: PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponse:
    actions: List[PostFirewallsIDActionsApplyToResourcesActionsResponseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    meta: Optional[PostFirewallsIDActionsApplyToResourcesActionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class PostFirewallsIDActionsApplyToResourcesResponse:
    actions_response: Optional[PostFirewallsIDActionsApplyToResourcesActionsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
