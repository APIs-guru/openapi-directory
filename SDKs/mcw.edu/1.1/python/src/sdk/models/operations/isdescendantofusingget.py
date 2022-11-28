from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IsDescendantOfUsingGetPathParams:
    acc_id1: str = field(metadata={'path_param': { 'field_name': 'accId1', 'style': 'simple', 'explode': False }})
    acc_id2: str = field(metadata={'path_param': { 'field_name': 'accId2', 'style': 'simple', 'explode': False }})
    

@dataclass
class IsDescendantOfUsingGetRequest:
    path_params: IsDescendantOfUsingGetPathParams = field()
    

@dataclass
class IsDescendantOfUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
