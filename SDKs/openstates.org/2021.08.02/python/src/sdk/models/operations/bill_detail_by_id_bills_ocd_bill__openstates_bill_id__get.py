from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams:
    openstates_bill_id: str = field(default=None, metadata={'path_param': { 'field_name': 'openstates_bill_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.BillIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetRequest:
    path_params: BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams = field(default=None)
    query_params: BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams = field(default=None)
    headers: BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders = field(default=None)
    

@dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse:
    bill: Optional[shared.Bill] = field(default=None)
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
