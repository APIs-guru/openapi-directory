from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetBillPathParams:
    bill_id: int = field(default=None, metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBillRequest:
    path_params: GetBillPathParams = field(default=None)
    

@dataclass
class GetBillResponse:
    bill: Optional[shared.Bill] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
