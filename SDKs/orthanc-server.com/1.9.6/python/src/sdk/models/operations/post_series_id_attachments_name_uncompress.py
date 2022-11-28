from dataclasses import dataclass, field



@dataclass
class PostSeriesIDAttachmentsNameUncompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDAttachmentsNameUncompressRequest:
    path_params: PostSeriesIDAttachmentsNameUncompressPathParams = field()
    

@dataclass
class PostSeriesIDAttachmentsNameUncompressResponse:
    content_type: str = field()
    status_code: int = field()
    
