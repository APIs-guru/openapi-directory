from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstitutionsNodeListPathParams:
    institution_id: str = field(metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstitutionsNodeListRequest:
    path_params: InstitutionsNodeListPathParams = field()
    

@dataclass
class InstitutionsNodeListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
