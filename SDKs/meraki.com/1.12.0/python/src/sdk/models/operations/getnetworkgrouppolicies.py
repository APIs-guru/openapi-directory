from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkGroupPoliciesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkGroupPoliciesRequest:
    path_params: GetNetworkGroupPoliciesPathParams = field(default=None)
    

@dataclass
class GetNetworkGroupPoliciesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_group_policies_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
