from dataclasses import dataclass, field
from typing import List


@dataclass
class PreprintsCitationListPathParams:
    preprint_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsCitationListRequest:
    path_params: PreprintsCitationListPathParams = field(default=None)
    

@dataclass
class PreprintsCitationListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
