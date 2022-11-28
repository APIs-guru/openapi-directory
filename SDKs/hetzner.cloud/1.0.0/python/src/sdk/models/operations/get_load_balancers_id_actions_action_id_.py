from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLoadBalancersIDActionsActionIDPathParams:
    action_id: int = field(metadata={'path_param': { 'field_name': 'action_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionIDActionResponseActionError:
    r"""GetLoadBalancersIDActionsActionIDActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionIDActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionIDActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: GetLoadBalancersIDActionsActionIDActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[GetLoadBalancersIDActionsActionIDActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionIDActionResponse:
    action: GetLoadBalancersIDActionsActionIDActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class GetLoadBalancersIDActionsActionIDRequest:
    path_params: GetLoadBalancersIDActionsActionIDPathParams = field()
    

@dataclass
class GetLoadBalancersIDActionsActionIDResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[GetLoadBalancersIDActionsActionIDActionResponse] = field(default=None)
    
