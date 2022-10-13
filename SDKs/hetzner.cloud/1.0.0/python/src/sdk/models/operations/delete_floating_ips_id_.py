from dataclasses import dataclass, field



@dataclass
class DeleteFloatingIpsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFloatingIpsIDRequest:
    path_params: DeleteFloatingIpsIDPathParams = field(default=None)
    

@dataclass
class DeleteFloatingIpsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
