from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueriesIDModalityPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDModalityRequest:
    path_params: GetQueriesIDModalityPathParams = field()
    

@dataclass
class GetQueriesIDModalityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
