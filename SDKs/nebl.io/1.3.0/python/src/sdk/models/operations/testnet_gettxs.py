from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTxsQueryParams:
    address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'block', 'style': 'form', 'explode': True }})
    page_num: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pageNum', 'style': 'form', 'explode': True }})
    

@dataclass
class TestnetGetTxsRequest:
    query_params: TestnetGetTxsQueryParams = field()
    

@dataclass
class TestnetGetTxsResponse:
    content_type: str = field()
    status_code: int = field()
    get_txs_response: Optional[shared.GetTxsResponse] = field(default=None)
    
