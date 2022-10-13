from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP_PING = "icmp-ping"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound:
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIps' }})
    destination_ports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationPorts' }})
    protocol: Optional[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules:
    allowed_inbound: Optional[List[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedInbound' }})
    lan_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lanIp' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIp' }})
    uplink: Optional[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplink' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody:
    rules: List[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest:
    path_params: UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams = field(default=None)
    request: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
