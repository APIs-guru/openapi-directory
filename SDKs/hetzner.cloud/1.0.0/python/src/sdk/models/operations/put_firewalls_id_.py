from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutFirewallsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFirewallsIDUpdateFirewallRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutFirewallsIDRequest:
    path_params: PutFirewallsIDPathParams = field(default=None)
    request: Optional[PutFirewallsIDUpdateFirewallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources:
    server: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedTo:
    applied_to_resources: Optional[List[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to_resources' }})
    label_selector: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ips' }})
    direction: PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ips' }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewall:
    applied_to: List[PutFirewallsIDFirewallResponseFirewallAppliedTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: List[PutFirewallsIDFirewallResponseFirewallRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponse:
    firewall: PutFirewallsIDFirewallResponseFirewall = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    

@dataclass
class PutFirewallsIDResponse:
    content_type: str = field(default=None)
    firewall_response: Optional[PutFirewallsIDFirewallResponse] = field(default=None)
    status_code: int = field(default=None)
    
