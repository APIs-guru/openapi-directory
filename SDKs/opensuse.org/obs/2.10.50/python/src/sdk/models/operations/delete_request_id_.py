from dataclasses import dataclass, field



@dataclass
class DeleteRequestIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRequestIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRequestIDRequest:
    path_params: DeleteRequestIDPathParams = field(default=None)
    security: DeleteRequestIDSecurity = field(default=None)
    

@dataclass
class DeleteRequestIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
