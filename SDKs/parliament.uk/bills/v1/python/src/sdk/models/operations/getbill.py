from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetBillPathParams:
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBillRequest:
    path_params: GetBillPathParams = field()
    

@dataclass
class GetBillResponse:
    content_type: str = field()
    status_code: int = field()
    bill: Optional[shared.Bill] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
