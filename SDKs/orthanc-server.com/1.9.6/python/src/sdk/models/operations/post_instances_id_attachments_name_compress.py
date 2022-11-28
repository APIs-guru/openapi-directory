from dataclasses import dataclass, field



@dataclass
class PostInstancesIDAttachmentsNameCompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDAttachmentsNameCompressRequest:
    path_params: PostInstancesIDAttachmentsNameCompressPathParams = field()
    

@dataclass
class PostInstancesIDAttachmentsNameCompressResponse:
    content_type: str = field()
    status_code: int = field()
    
