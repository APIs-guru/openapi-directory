from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTermUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTermUsingGetRequest:
    path_params: GetTermUsingGetPathParams = field()
    

@dataclass
class GetTermUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
