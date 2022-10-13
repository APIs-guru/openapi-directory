from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceSecurityIntrusionPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceSecurityIntrusionRequest:
    path_params: GetNetworkApplianceSecurityIntrusionPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceSecurityIntrusionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
