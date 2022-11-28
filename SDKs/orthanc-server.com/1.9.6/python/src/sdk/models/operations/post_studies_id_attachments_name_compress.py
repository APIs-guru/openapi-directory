from dataclasses import dataclass, field



@dataclass
class PostStudiesIDAttachmentsNameCompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDAttachmentsNameCompressRequest:
    path_params: PostStudiesIDAttachmentsNameCompressPathParams = field()
    

@dataclass
class PostStudiesIDAttachmentsNameCompressResponse:
    content_type: str = field()
    status_code: int = field()
    
