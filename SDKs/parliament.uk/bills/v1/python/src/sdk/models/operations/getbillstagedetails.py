from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetBillStageDetailsPathParams:
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    bill_stage_id: int = field(metadata={'path_param': { 'field_name': 'billStageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBillStageDetailsRequest:
    path_params: GetBillStageDetailsPathParams = field()
    

@dataclass
class GetBillStageDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    bill_stage_details: Optional[shared.BillStageDetails] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
