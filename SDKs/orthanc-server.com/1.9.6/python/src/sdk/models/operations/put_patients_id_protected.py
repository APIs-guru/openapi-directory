from dataclasses import dataclass, field



@dataclass
class PutPatientsIDProtectedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPatientsIDProtectedRequest:
    path_params: PutPatientsIDProtectedPathParams = field()
    

@dataclass
class PutPatientsIDProtectedResponse:
    content_type: str = field()
    status_code: int = field()
    
