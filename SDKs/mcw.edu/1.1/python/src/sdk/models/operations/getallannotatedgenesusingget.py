from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAllAnnotatedGenesUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllAnnotatedGenesUsingGetRequest:
    path_params: GetAllAnnotatedGenesUsingGetPathParams = field()
    

@dataclass
class GetAllAnnotatedGenesUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
