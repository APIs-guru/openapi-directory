from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1BillsBillIDStagesPathParams:
    bill_id: int = field(default=None, metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1BillsBillIDStagesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1BillsBillIDStagesRequest:
    path_params: GetAPIV1BillsBillIDStagesPathParams = field(default=None)
    query_params: GetAPIV1BillsBillIDStagesQueryParams = field(default=None)
    

@dataclass
class GetAPIV1BillsBillIDStagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    stage_summary_search_result: Optional[shared.StageSummarySearchResult] = field(default=None)
    status_code: int = field(default=None)
    
