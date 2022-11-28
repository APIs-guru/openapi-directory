from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = field(metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchAccessPolicyRequest:
    path_params: DeleteNetworkSwitchAccessPolicyPathParams = field()
    

@dataclass
class DeleteNetworkSwitchAccessPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    
