from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallFirewalledServicePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    service: str = field(metadata={'path_param': { 'field_name': 'service', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServiceRequest:
    path_params: GetNetworkApplianceFirewallFirewalledServicePathParams = field()
    

@dataclass
class GetNetworkApplianceFirewallFirewalledServiceResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_firewall_firewalled_service_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
