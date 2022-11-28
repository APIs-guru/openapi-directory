from dataclasses import dataclass, field



@dataclass
class PostInstancesIDAttachmentsNameUncompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDAttachmentsNameUncompressRequest:
    path_params: PostInstancesIDAttachmentsNameUncompressPathParams = field()
    

@dataclass
class PostInstancesIDAttachmentsNameUncompressResponse:
    content_type: str = field()
    status_code: int = field()
    
