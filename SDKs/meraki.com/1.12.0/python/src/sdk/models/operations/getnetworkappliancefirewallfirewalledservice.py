from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallFirewalledServicePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    service: str = field(default=None, metadata={'path_param': { 'field_name': 'service', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServiceRequest:
    path_params: GetNetworkApplianceFirewallFirewalledServicePathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_firewalled_service_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
