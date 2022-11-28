from dataclasses import dataclass, field



@dataclass
class PostPatientsIDAttachmentsNameCompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDAttachmentsNameCompressRequest:
    path_params: PostPatientsIDAttachmentsNameCompressPathParams = field()
    

@dataclass
class PostPatientsIDAttachmentsNameCompressResponse:
    content_type: str = field()
    status_code: int = field()
    
