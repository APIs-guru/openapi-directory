from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostFirewallsIDActionsSetRulesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesRequestBodyRulesRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ips' }})
    direction: PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ips' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRulesRequestBodySetRulesRequest:
    rules: List[PostFirewallsIDActionsSetRulesRequestBodyRulesRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class PostFirewallsIDActionsSetRulesRequest:
    path_params: PostFirewallsIDActionsSetRulesPathParams = field(default=None)
    request: Optional[PostFirewallsIDActionsSetRulesRequestBodySetRulesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRules201ApplicationJSONActionsError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRules201ApplicationJSONActionsResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRules201ApplicationJSONActionsAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostFirewallsIDActionsSetRules201ApplicationJSONActionsError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostFirewallsIDActionsSetRules201ApplicationJSONActionsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRules201ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRules201ApplicationJSONMeta:
    pagination: PostFirewallsIDActionsSetRules201ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class PostFirewallsIDActionsSetRules201ApplicationJSONActionsResponse:
    actions: List[PostFirewallsIDActionsSetRules201ApplicationJSONActionsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    meta: Optional[PostFirewallsIDActionsSetRules201ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class PostFirewallsIDActionsSetRulesResponse:
    actions_response: Optional[PostFirewallsIDActionsSetRules201ApplicationJSONActionsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
