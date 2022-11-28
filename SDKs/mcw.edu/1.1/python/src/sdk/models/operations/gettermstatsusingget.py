from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTermStatsUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    filter_acc_id: str = field(metadata={'path_param': { 'field_name': 'filterAccId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTermStatsUsingGetRequest:
    path_params: GetTermStatsUsingGetPathParams = field()
    

@dataclass
class GetTermStatsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
