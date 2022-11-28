from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams:
    openstates_bill_id: str = field(metadata={'path_param': { 'field_name': 'openstates_bill_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.BillIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetRequest:
    headers: BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders = field()
    path_params: BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams = field()
    query_params: BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams = field()
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    bill: Optional[shared.Bill] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
