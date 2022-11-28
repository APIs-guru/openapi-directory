from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1BillsBillIDStagesPathParams:
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1BillsBillIDStagesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1BillsBillIDStagesRequest:
    path_params: GetAPIV1BillsBillIDStagesPathParams = field()
    query_params: GetAPIV1BillsBillIDStagesQueryParams = field()
    

@dataclass
class GetAPIV1BillsBillIDStagesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    stage_summary_search_result: Optional[shared.StageSummarySearchResult] = field(default=None)
    
