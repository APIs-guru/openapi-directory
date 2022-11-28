from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostFirewallsIDActionsApplyToResourcesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector:
    r"""PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector
    Configuration for type label_selector, required if type is `label_selector`
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer:
    r"""PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer
    Configuration for type server, required if type is `server`
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources:
    label_selector: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest:
    apply_to: List[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apply_to') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionError:
    r"""PostFirewallsIDActionsApplyToResourcesActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFirewallsIDActionsApplyToResourcesActionsResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseMeta:
    pagination: PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponse:
    actions: List[PostFirewallsIDActionsApplyToResourcesActionsResponseAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[PostFirewallsIDActionsApplyToResourcesActionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class PostFirewallsIDActionsApplyToResourcesRequest:
    path_params: PostFirewallsIDActionsApplyToResourcesPathParams = field()
    request: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFirewallsIDActionsApplyToResourcesResponse:
    content_type: str = field()
    status_code: int = field()
    actions_response: Optional[PostFirewallsIDActionsApplyToResourcesActionsResponse] = field(default=None)
    
