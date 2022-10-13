from dataclasses import dataclass, field



@dataclass
class DeleteLoadBalancersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLoadBalancersIDRequest:
    path_params: DeleteLoadBalancersIDPathParams = field(default=None)
    

@dataclass
class DeleteLoadBalancersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
