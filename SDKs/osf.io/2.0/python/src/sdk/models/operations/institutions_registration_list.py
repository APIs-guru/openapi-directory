from dataclasses import dataclass, field



@dataclass
class InstitutionsRegistrationListPathParams:
    institution_id: str = field(metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstitutionsRegistrationListRequest:
    path_params: InstitutionsRegistrationListPathParams = field()
    

@dataclass
class InstitutionsRegistrationListResponse:
    content_type: str = field()
    status_code: int = field()
    
