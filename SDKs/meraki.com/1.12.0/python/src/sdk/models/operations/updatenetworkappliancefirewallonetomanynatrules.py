from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules:
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIps' }})
    local_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localIp' }})
    local_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPort' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol: Optional[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    public_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicPort' }})
    
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules:
    port_rules: List[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portRules' }})
    public_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIp' }})
    uplink: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplink' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody:
    rules: List[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest:
    path_params: UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams = field(default=None)
    request: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
