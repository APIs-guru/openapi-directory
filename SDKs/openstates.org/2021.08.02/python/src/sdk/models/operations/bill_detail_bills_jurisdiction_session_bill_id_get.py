from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BillDetailBillsJurisdictionSessionBillIDGetPathParams:
    bill_id: str = field(metadata={'path_param': { 'field_name': 'bill_id', 'style': 'simple', 'explode': False }})
    jurisdiction: str = field(metadata={'path_param': { 'field_name': 'jurisdiction', 'style': 'simple', 'explode': False }})
    session: str = field(metadata={'path_param': { 'field_name': 'session', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillDetailBillsJurisdictionSessionBillIDGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.BillIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class BillDetailBillsJurisdictionSessionBillIDGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillDetailBillsJurisdictionSessionBillIDGetRequest:
    headers: BillDetailBillsJurisdictionSessionBillIDGetHeaders = field()
    path_params: BillDetailBillsJurisdictionSessionBillIDGetPathParams = field()
    query_params: BillDetailBillsJurisdictionSessionBillIDGetQueryParams = field()
    

@dataclass
class BillDetailBillsJurisdictionSessionBillIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    bill: Optional[shared.Bill] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
