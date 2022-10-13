from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkGroupPolicyPathParams:
    group_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkGroupPolicyRequest:
    path_params: GetNetworkGroupPolicyPathParams = field(default=None)
    

@dataclass
class GetNetworkGroupPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_group_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
