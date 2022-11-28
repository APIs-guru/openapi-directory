from dataclasses import dataclass, field



@dataclass
class PostStudiesIDAttachmentsNameUncompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDAttachmentsNameUncompressRequest:
    path_params: PostStudiesIDAttachmentsNameUncompressPathParams = field()
    

@dataclass
class PostStudiesIDAttachmentsNameUncompressResponse:
    content_type: str = field()
    status_code: int = field()
    
