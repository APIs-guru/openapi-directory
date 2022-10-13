from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    allowed_ips: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIps' }})
    lan_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lanIp' }})
    local_port: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPort' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    public_port: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicPort' }})
    uplink: Optional[UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplink' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody:
    rules: List[UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequest:
    path_params: UpdateNetworkApplianceFirewallPortForwardingRulesPathParams = field(default=None)
    request: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_firewall_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
