from dataclasses import dataclass, field



@dataclass
class ExtrasGraphsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasGraphsDeleteRequest:
    path_params: ExtrasGraphsDeletePathParams = field(default=None)
    

@dataclass
class ExtrasGraphsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
