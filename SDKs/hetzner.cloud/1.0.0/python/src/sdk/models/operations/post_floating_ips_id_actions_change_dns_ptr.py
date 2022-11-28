from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrChangeDnsptrRequest:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError:
    r"""PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponse:
    action: PostFloatingIpsIDActionsChangeDNSPtrActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrRequest:
    path_params: PostFloatingIpsIDActionsChangeDNSPtrPathParams = field()
    request: Optional[PostFloatingIpsIDActionsChangeDNSPtrChangeDnsptrRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFloatingIpsIDActionsChangeDNSPtrResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostFloatingIpsIDActionsChangeDNSPtrActionResponse] = field(default=None)
    
