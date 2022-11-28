from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchQosRulePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    qos_rule_id: str = field(metadata={'path_param': { 'field_name': 'qosRuleId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum(str, Enum):
    ANY = "ANY"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclass
class UpdateNetworkSwitchQosRuleRequestBody:
    dscp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp') }})
    dst_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    dst_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPortRange') }})
    protocol: Optional[UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    src_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPortRange') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclass
class UpdateNetworkSwitchQosRuleRequest:
    path_params: UpdateNetworkSwitchQosRulePathParams = field()
    request: Optional[UpdateNetworkSwitchQosRuleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchQosRuleResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_qos_rule_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
