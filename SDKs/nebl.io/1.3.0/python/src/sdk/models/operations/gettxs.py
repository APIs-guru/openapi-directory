from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTxsQueryParams:
    address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'block', 'style': 'form', 'explode': True }})
    page_num: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pageNum', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTxsRequest:
    query_params: GetTxsQueryParams = field(default=None)
    

@dataclass
class GetTxsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_txs_response: Optional[shared.GetTxsResponse] = field(default=None)
    
