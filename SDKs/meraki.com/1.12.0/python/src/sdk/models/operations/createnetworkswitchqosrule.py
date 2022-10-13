from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSwitchQosRulePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchQosRuleRequestBodyProtocolEnum(str, Enum):
    ANY = "ANY"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclass
class CreateNetworkSwitchQosRuleRequestBody:
    dscp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dscp' }})
    dst_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dstPort' }})
    dst_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dstPortRange' }})
    protocol: Optional[CreateNetworkSwitchQosRuleRequestBodyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    src_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPort' }})
    src_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPortRange' }})
    vlan: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    

@dataclass
class CreateNetworkSwitchQosRuleRequest:
    path_params: CreateNetworkSwitchQosRulePathParams = field(default=None)
    request: CreateNetworkSwitchQosRuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchQosRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_switch_qos_rule_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
