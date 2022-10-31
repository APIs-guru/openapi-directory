from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class BillsSearchBillsGetQueryParams:
    action_since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'action_since', 'style': 'form', 'explode': True }})
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    chamber: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'chamber', 'style': 'form', 'explode': True }})
    classification: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    created_since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created_since', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.BillIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    session: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'session', 'style': 'form', 'explode': True }})
    sort: Optional[shared.BillSortOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sponsor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sponsor', 'style': 'form', 'explode': True }})
    sponsor_classification: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sponsor_classification', 'style': 'form', 'explode': True }})
    subject: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    updated_since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated_since', 'style': 'form', 'explode': True }})
    

@dataclass
class BillsSearchBillsGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillsSearchBillsGetRequest:
    query_params: BillsSearchBillsGetQueryParams = field(default=None)
    headers: BillsSearchBillsGetHeaders = field(default=None)
    

@dataclass
class BillsSearchBillsGetResponse:
    bill_list: Optional[shared.BillList] = field(default=None)
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
