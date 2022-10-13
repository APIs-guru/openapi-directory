from dataclasses import dataclass, field



@dataclass
class InstitutionsDetailPathParams:
    institution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstitutionsDetailRequest:
    path_params: InstitutionsDetailPathParams = field(default=None)
    

@dataclass
class InstitutionsDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
