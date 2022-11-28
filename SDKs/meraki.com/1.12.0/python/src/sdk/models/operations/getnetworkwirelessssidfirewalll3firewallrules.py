from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidFirewallL3FirewallRulesRequest:
    path_params: GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams = field()
    

@dataclass
class GetNetworkWirelessSsidFirewallL3FirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
