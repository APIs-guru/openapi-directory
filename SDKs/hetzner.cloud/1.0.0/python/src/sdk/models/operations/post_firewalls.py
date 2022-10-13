from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostFirewallsRequestBodyApplyToLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostFirewallsRequestBodyApplyToServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostFirewallsRequestBodyApplyToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsRequestBodyApplyTo:
    label_selector: Optional[PostFirewallsRequestBodyApplyToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostFirewallsRequestBodyApplyToServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PostFirewallsRequestBodyApplyToTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewallsRequestBodyRulesDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PostFirewallsRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PostFirewallsRequestBodyRulesRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ips' }})
    direction: PostFirewallsRequestBodyRulesDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostFirewallsRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ips' }})
    

@dataclass_json
@dataclass
class PostFirewallsRequestBodyCreateFirewallRequest:
    apply_to: Optional[List[PostFirewallsRequestBodyApplyTo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apply_to' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[PostFirewallsRequestBodyRulesRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class PostFirewallsRequest:
    request: Optional[PostFirewallsRequestBodyCreateFirewallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONActionsError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONActionsResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewalls201ApplicationJSONActionsStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONActionsAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostFirewalls201ApplicationJSONActionsError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostFirewalls201ApplicationJSONActionsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostFirewalls201ApplicationJSONActionsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResources:
    server: Optional[PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONFirewallAppliedToLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONFirewallAppliedToServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONFirewallAppliedTo:
    applied_to_resources: Optional[List[PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to_resources' }})
    label_selector: Optional[PostFirewalls201ApplicationJSONFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostFirewalls201ApplicationJSONFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFirewalls201ApplicationJSONFirewallRulesDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONFirewallRulesRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ips' }})
    direction: PostFirewalls201ApplicationJSONFirewallRulesDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ips' }})
    

@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONFirewallFirewall:
    applied_to: List[PostFirewalls201ApplicationJSONFirewallAppliedTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: List[PostFirewalls201ApplicationJSONFirewallRulesRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass_json
@dataclass
class PostFirewalls201ApplicationJSONCreateFirewallResponse:
    actions: Optional[List[PostFirewalls201ApplicationJSONActionsAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    firewall: Optional[PostFirewalls201ApplicationJSONFirewallFirewall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    

@dataclass
class PostFirewallsResponse:
    content_type: str = field(default=None)
    create_firewall_response: Optional[PostFirewalls201ApplicationJSONCreateFirewallResponse] = field(default=None)
    status_code: int = field(default=None)
    
