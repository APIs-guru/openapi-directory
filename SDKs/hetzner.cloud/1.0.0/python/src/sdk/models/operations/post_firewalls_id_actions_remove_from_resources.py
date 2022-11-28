from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostFirewallsIDActionsRemoveFromResourcesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector:
    r"""PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector
    Configuration for type label_selector, required if type is `label_selector`
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer:
    r"""PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer
    Configuration for type server, required if type is `server`
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources:
    label_selector: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest:
    remove_from: List[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove_from') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError:
    r"""PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta:
    pagination: PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponse:
    actions: List[PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequest:
    path_params: PostFirewallsIDActionsRemoveFromResourcesPathParams = field()
    request: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFirewallsIDActionsRemoveFromResourcesResponse:
    content_type: str = field()
    status_code: int = field()
    actions_response: Optional[PostFirewallsIDActionsRemoveFromResourcesActionsResponse] = field(default=None)
    
