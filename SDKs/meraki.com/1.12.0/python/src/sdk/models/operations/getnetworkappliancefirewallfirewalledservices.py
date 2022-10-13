from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallFirewalledServicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServicesRequest:
    path_params: GetNetworkApplianceFirewallFirewalledServicesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_firewalled_services_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
