from dataclasses import dataclass, field



@dataclass
class DeleteFloatingIpsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFloatingIpsIDRequest:
    path_params: DeleteFloatingIpsIDPathParams = field()
    

@dataclass
class DeleteFloatingIpsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
