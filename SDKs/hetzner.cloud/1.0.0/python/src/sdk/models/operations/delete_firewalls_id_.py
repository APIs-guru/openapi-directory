from dataclasses import dataclass, field



@dataclass
class DeleteFirewallsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFirewallsIDRequest:
    path_params: DeleteFirewallsIDPathParams = field(default=None)
    

@dataclass
class DeleteFirewallsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
