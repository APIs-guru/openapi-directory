from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkClientPolicyPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientPolicyRequest:
    path_params: GetNetworkClientPolicyPathParams = field(default=None)
    

@dataclass
class GetNetworkClientPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_client_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
