from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules:
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    local_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localIp') }})
    local_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPort') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: Optional[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    public_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPort') }})
    
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules:
    port_rules: List[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portRules') }})
    public_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    uplink: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplink') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody:
    rules: List[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest:
    path_params: UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams = field()
    request: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
