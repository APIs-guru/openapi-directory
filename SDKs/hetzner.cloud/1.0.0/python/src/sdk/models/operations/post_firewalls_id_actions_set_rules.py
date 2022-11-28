from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostFirewallsIDActionsSetRulesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesSetRulesRequestRule:
    direction: PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesSetRulesRequest:
    rules: List[PostFirewallsIDActionsSetRulesSetRulesRequestRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesActionsResponseActionError:
    r"""PostFirewallsIDActionsSetRulesActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesActionsResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesActionsResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFirewallsIDActionsSetRulesActionsResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostFirewallsIDActionsSetRulesActionsResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesActionsResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesActionsResponseMeta:
    pagination: PostFirewallsIDActionsSetRulesActionsResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesActionsResponse:
    actions: List[PostFirewallsIDActionsSetRulesActionsResponseAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[PostFirewallsIDActionsSetRulesActionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class PostFirewallsIDActionsSetRulesRequest:
    path_params: PostFirewallsIDActionsSetRulesPathParams = field()
    request: Optional[PostFirewallsIDActionsSetRulesSetRulesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFirewallsIDActionsSetRulesResponse:
    content_type: str = field()
    status_code: int = field()
    actions_response: Optional[PostFirewallsIDActionsSetRulesActionsResponse] = field(default=None)
    
