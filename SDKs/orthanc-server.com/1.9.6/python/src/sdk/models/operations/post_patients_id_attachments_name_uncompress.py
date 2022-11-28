from dataclasses import dataclass, field



@dataclass
class PostPatientsIDAttachmentsNameUncompressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDAttachmentsNameUncompressRequest:
    path_params: PostPatientsIDAttachmentsNameUncompressPathParams = field()
    

@dataclass
class PostPatientsIDAttachmentsNameUncompressResponse:
    content_type: str = field()
    status_code: int = field()
    
