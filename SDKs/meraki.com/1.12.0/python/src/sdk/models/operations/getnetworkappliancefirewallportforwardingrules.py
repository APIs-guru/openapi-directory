from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallPortForwardingRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallPortForwardingRulesRequest:
    path_params: GetNetworkApplianceFirewallPortForwardingRulesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallPortForwardingRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
