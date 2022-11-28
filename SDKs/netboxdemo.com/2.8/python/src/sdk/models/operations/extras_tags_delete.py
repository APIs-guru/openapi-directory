from dataclasses import dataclass, field



@dataclass
class ExtrasTagsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTagsDeleteRequest:
    path_params: ExtrasTagsDeletePathParams = field()
    

@dataclass
class ExtrasTagsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
