from dataclasses import dataclass, field



@dataclass
class DeleteNetworkGroupPolicyPathParams:
    group_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkGroupPolicyRequest:
    path_params: DeleteNetworkGroupPolicyPathParams = field(default=None)
    

@dataclass
class DeleteNetworkGroupPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
