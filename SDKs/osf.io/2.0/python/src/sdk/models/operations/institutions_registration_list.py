from dataclasses import dataclass, field
from typing import List


@dataclass
class InstitutionsRegistrationListPathParams:
    institution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstitutionsRegistrationListRequest:
    path_params: InstitutionsRegistrationListPathParams = field(default=None)
    

@dataclass
class InstitutionsRegistrationListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
