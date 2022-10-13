from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = field(default=None, metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchAccessPolicyRequest:
    path_params: DeleteNetworkSwitchAccessPolicyPathParams = field(default=None)
    

@dataclass
class DeleteNetworkSwitchAccessPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
