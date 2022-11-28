from dataclasses import dataclass, field



@dataclass
class PostSeriesIDAttachmentsNameCompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDAttachmentsNameCompressRequest:
    path_params: PostSeriesIDAttachmentsNameCompressPathParams = field()
    

@dataclass
class PostSeriesIDAttachmentsNameCompressResponse:
    content_type: str = field()
    status_code: int = field()
    
