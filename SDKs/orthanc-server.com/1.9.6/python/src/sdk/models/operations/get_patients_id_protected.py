from dataclasses import dataclass, field



@dataclass
class GetPatientsIDProtectedPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDProtectedRequest:
    path_params: GetPatientsIDProtectedPathParams = field(default=None)
    

@dataclass
class GetPatientsIDProtectedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
