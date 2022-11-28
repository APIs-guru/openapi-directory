from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkGroupPolicyPathParams:
    group_policy_id: str = field(metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkGroupPolicyRequest:
    path_params: GetNetworkGroupPolicyPathParams = field()
    

@dataclass
class GetNetworkGroupPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_group_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
