from dataclasses import dataclass, field



@dataclass
class PostInstancesIDAttachmentsNameCompressPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDAttachmentsNameCompressRequest:
    path_params: PostInstancesIDAttachmentsNameCompressPathParams = field(default=None)
    

@dataclass
class PostInstancesIDAttachmentsNameCompressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
