from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP_PING = "icmp-ping"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound:
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    destination_ports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPorts') }})
    protocol: Optional[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules:
    lan_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIp') }})
    allowed_inbound: Optional[List[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedInbound') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    uplink: Optional[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplink') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody:
    rules: List[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest:
    path_params: UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams = field()
    request: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
