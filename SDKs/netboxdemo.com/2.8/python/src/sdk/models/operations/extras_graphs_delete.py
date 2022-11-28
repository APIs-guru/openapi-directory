from dataclasses import dataclass, field



@dataclass
class ExtrasGraphsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasGraphsDeleteRequest:
    path_params: ExtrasGraphsDeletePathParams = field()
    

@dataclass
class ExtrasGraphsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
