from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAmendmentPathParams:
    amendment_id: int = field(metadata={'path_param': { 'field_name': 'amendmentId', 'style': 'simple', 'explode': False }})
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    bill_stage_id: int = field(metadata={'path_param': { 'field_name': 'billStageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAmendmentRequest:
    path_params: GetAmendmentPathParams = field()
    

@dataclass
class GetAmendmentResponse:
    content_type: str = field()
    status_code: int = field()
    amendment_detail: Optional[shared.AmendmentDetail] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
