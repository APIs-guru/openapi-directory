from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchAccessPoliciesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchAccessPoliciesRequest:
    path_params: GetNetworkSwitchAccessPoliciesPathParams = field()
    

@dataclass
class GetNetworkSwitchAccessPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_access_policies_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
