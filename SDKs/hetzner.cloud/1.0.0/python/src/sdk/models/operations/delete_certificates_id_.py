from dataclasses import dataclass, field



@dataclass
class DeleteCertificatesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCertificatesIDRequest:
    path_params: DeleteCertificatesIDPathParams = field()
    

@dataclass
class DeleteCertificatesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
