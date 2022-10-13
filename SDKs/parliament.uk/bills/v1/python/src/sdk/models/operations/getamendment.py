from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAmendmentPathParams:
    amendment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'amendmentId', 'style': 'simple', 'explode': False }})
    bill_id: int = field(default=None, metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    bill_stage_id: int = field(default=None, metadata={'path_param': { 'field_name': 'billStageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAmendmentRequest:
    path_params: GetAmendmentPathParams = field(default=None)
    

@dataclass
class GetAmendmentResponse:
    amendment_detail: Optional[shared.AmendmentDetail] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
