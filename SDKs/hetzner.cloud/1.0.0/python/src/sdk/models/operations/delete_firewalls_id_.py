from dataclasses import dataclass, field



@dataclass
class DeleteFirewallsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFirewallsIDRequest:
    path_params: DeleteFirewallsIDPathParams = field()
    

@dataclass
class DeleteFirewallsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
