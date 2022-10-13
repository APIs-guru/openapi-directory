from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetFirewallsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallsIDRequest:
    path_params: GetFirewallsIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources:
    server: Optional[GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallAppliedToServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallAppliedTo:
    applied_to_resources: Optional[List[GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to_resources' }})
    label_selector: Optional[GetFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[GetFirewallsID200ApplicationJSONFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallRulesRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ips' }})
    direction: GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ips' }})
    

@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallFirewall:
    applied_to: List[GetFirewallsID200ApplicationJSONFirewallAppliedTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: List[GetFirewallsID200ApplicationJSONFirewallRulesRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass_json
@dataclass
class GetFirewallsID200ApplicationJSONFirewallResponse:
    firewall: GetFirewallsID200ApplicationJSONFirewallFirewall = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    

@dataclass
class GetFirewallsIDResponse:
    content_type: str = field(default=None)
    firewall_response: Optional[GetFirewallsID200ApplicationJSONFirewallResponse] = field(default=None)
    status_code: int = field(default=None)
    
