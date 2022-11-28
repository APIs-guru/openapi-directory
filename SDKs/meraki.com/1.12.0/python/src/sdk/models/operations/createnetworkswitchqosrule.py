from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchQosRulePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchQosRuleRequestBodyProtocolEnum(str, Enum):
    ANY = "ANY"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclass
class CreateNetworkSwitchQosRuleRequestBody:
    vlan: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    dscp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp') }})
    dst_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    dst_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPortRange') }})
    protocol: Optional[CreateNetworkSwitchQosRuleRequestBodyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    src_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPortRange') }})
    

@dataclass
class CreateNetworkSwitchQosRuleRequest:
    path_params: CreateNetworkSwitchQosRulePathParams = field()
    request: CreateNetworkSwitchQosRuleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchQosRuleResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_qos_rule_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
