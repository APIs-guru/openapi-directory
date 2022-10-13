from dataclasses import dataclass, field



@dataclass
class GetTermStatsUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    filter_acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'filterAccId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTermStatsUsingGetRequest:
    path_params: GetTermStatsUsingGetPathParams = field(default=None)
    

@dataclass
class GetTermStatsUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
