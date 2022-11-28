from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGeneByMapKeyUsingGetPathParams:
    map_key: int = field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneByMapKeyUsingGetRequest:
    path_params: GetGeneByMapKeyUsingGetPathParams = field()
    

@dataclass
class GetGeneByMapKeyUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
