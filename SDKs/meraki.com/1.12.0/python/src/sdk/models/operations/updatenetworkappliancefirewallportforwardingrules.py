from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"

class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"
    BOTH = "both"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules:
    allowed_ips: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    lan_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIp') }})
    local_port: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPort') }})
    protocol: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    public_port: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPort') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uplink: Optional[UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplink') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody:
    rules: List[UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequest:
    path_params: UpdateNetworkApplianceFirewallPortForwardingRulesPathParams = field()
    request: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_firewall_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
