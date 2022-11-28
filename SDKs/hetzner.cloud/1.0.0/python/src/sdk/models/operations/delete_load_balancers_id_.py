from dataclasses import dataclass, field



@dataclass
class DeleteLoadBalancersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLoadBalancersIDRequest:
    path_params: DeleteLoadBalancersIDPathParams = field()
    

@dataclass
class DeleteLoadBalancersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
