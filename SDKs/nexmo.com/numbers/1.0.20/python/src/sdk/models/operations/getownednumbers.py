from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOwnedNumbersQueryParams:
    application_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'application_id', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    has_application: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'has_application', 'style': 'form', 'explode': True }})
    index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'index', 'style': 'form', 'explode': True }})
    pattern: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pattern', 'style': 'form', 'explode': True }})
    search_pattern: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search_pattern', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOwnedNumbersRequest:
    query_params: GetOwnedNumbersQueryParams = field()
    

@dataclass
class GetOwnedNumbersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    account_unauthorized: Optional[shared.AccountUnauthorized] = field(default=None)
    inbound_numbers: Optional[shared.InboundNumbers] = field(default=None)
    
