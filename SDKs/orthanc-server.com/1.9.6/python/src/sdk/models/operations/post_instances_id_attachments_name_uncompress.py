from dataclasses import dataclass, field



@dataclass
class PostInstancesIDAttachmentsNameUncompressPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDAttachmentsNameUncompressRequest:
    path_params: PostInstancesIDAttachmentsNameUncompressPathParams = field(default=None)
    

@dataclass
class PostInstancesIDAttachmentsNameUncompressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
