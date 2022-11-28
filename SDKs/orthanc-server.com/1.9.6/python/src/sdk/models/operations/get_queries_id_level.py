from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueriesIDLevelPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDLevelRequest:
    path_params: GetQueriesIDLevelPathParams = field()
    

@dataclass
class GetQueriesIDLevelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
