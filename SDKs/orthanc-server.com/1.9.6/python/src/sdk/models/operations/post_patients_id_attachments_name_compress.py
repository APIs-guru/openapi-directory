from dataclasses import dataclass, field



@dataclass
class PostPatientsIDAttachmentsNameCompressPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDAttachmentsNameCompressRequest:
    path_params: PostPatientsIDAttachmentsNameCompressPathParams = field(default=None)
    

@dataclass
class PostPatientsIDAttachmentsNameCompressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
