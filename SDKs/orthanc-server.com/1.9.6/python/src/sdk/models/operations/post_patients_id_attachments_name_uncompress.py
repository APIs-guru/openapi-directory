from dataclasses import dataclass, field



@dataclass
class PostPatientsIDAttachmentsNameUncompressPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDAttachmentsNameUncompressRequest:
    path_params: PostPatientsIDAttachmentsNameUncompressPathParams = field(default=None)
    

@dataclass
class PostPatientsIDAttachmentsNameUncompressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
