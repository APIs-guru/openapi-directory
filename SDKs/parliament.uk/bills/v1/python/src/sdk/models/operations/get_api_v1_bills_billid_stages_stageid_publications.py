from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1BillsBillIDStagesStageIDPublicationsPathParams:
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    stage_id: int = field(metadata={'path_param': { 'field_name': 'stageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1BillsBillIDStagesStageIDPublicationsRequest:
    path_params: GetAPIV1BillsBillIDStagesStageIDPublicationsPathParams = field()
    

@dataclass
class GetAPIV1BillsBillIDStagesStageIDPublicationsResponse:
    content_type: str = field()
    status_code: int = field()
    bill_stage_publication_list: Optional[shared.BillStagePublicationList] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
