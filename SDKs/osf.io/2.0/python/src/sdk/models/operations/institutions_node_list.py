from dataclasses import dataclass, field
from typing import List


@dataclass
class InstitutionsNodeListPathParams:
    institution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstitutionsNodeListRequest:
    path_params: InstitutionsNodeListPathParams = field(default=None)
    

@dataclass
class InstitutionsNodeListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
