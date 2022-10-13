from dataclasses import dataclass, field



@dataclass
class DeleteCertificatesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCertificatesIDRequest:
    path_params: DeleteCertificatesIDPathParams = field(default=None)
    

@dataclass
class DeleteCertificatesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
