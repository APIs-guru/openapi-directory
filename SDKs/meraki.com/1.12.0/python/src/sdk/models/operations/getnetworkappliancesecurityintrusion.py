from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceSecurityIntrusionPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceSecurityIntrusionRequest:
    path_params: GetNetworkApplianceSecurityIntrusionPathParams = field()
    

@dataclass
class GetNetworkApplianceSecurityIntrusionResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
