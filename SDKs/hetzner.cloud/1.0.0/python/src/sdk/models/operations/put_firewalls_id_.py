from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutFirewallsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFirewallsIDRequestBodyUpdateFirewallRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutFirewallsIDRequest:
    path_params: PutFirewallsIDPathParams = field(default=None)
    request: Optional[PutFirewallsIDRequestBodyUpdateFirewallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources:
    server: Optional[PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallAppliedToServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallAppliedTo:
    applied_to_resources: Optional[List[PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to_resources' }})
    label_selector: Optional[PutFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PutFirewallsID200ApplicationJSONFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallRulesRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ips' }})
    direction: PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ips' }})
    

@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallFirewall:
    applied_to: List[PutFirewallsID200ApplicationJSONFirewallAppliedTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: List[PutFirewallsID200ApplicationJSONFirewallRulesRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass_json
@dataclass
class PutFirewallsID200ApplicationJSONFirewallResponse:
    firewall: PutFirewallsID200ApplicationJSONFirewallFirewall = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    

@dataclass
class PutFirewallsIDResponse:
    content_type: str = field(default=None)
    firewall_response: Optional[PutFirewallsID200ApplicationJSONFirewallResponse] = field(default=None)
    status_code: int = field(default=None)
    
