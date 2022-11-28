from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprintsCitationListPathParams:
    preprint_id: str = field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsCitationListRequest:
    path_params: PreprintsCitationListPathParams = field()
    

@dataclass
class PreprintsCitationListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
