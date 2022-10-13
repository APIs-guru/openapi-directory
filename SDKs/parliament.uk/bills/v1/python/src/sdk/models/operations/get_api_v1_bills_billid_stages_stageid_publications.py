from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAPIV1BillsBillIDStagesStageIDPublicationsPathParams:
    bill_id: int = field(default=None, metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    stage_id: int = field(default=None, metadata={'path_param': { 'field_name': 'stageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1BillsBillIDStagesStageIDPublicationsRequest:
    path_params: GetAPIV1BillsBillIDStagesStageIDPublicationsPathParams = field(default=None)
    

@dataclass
class GetAPIV1BillsBillIDStagesStageIDPublicationsResponse:
    bill_stage_publication_list: Optional[shared.BillStagePublicationList] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
