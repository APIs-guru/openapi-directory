from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallFirewalledServicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServicesRequest:
    path_params: GetNetworkApplianceFirewallFirewalledServicesPathParams = field()
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServicesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_firewall_firewalled_services_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
