from dataclasses import dataclass, field



@dataclass
class PutPatientsIDProtectedPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPatientsIDProtectedRequest:
    path_params: PutPatientsIDProtectedPathParams = field(default=None)
    

@dataclass
class PutPatientsIDProtectedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
