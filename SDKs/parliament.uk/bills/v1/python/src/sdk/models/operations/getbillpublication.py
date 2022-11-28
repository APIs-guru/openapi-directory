from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetBillPublicationPathParams:
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBillPublicationRequest:
    path_params: GetBillPublicationPathParams = field()
    

@dataclass
class GetBillPublicationResponse:
    content_type: str = field()
    status_code: int = field()
    bill_publication_list: Optional[shared.BillPublicationList] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
