from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstitutionsDetailPathParams:
    institution_id: str = field(metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstitutionsDetailRequest:
    path_params: InstitutionsDetailPathParams = field()
    

@dataclass
class InstitutionsDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
