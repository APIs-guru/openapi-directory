from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetBillPublicationPathParams:
    bill_id: int = field(default=None, metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBillPublicationRequest:
    path_params: GetBillPublicationPathParams = field(default=None)
    

@dataclass
class GetBillPublicationResponse:
    bill_publication_list: Optional[shared.BillPublicationList] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
