from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAmendmentsPathParams:
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    bill_stage_id: int = field(metadata={'path_param': { 'field_name': 'billStageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAmendmentsQueryParams:
    decision: Optional[shared.DecisionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Decision', 'style': 'form', 'explode': True }})
    member_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MemberId', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SearchTerm', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAmendmentsRequest:
    path_params: GetAmendmentsPathParams = field()
    query_params: GetAmendmentsQueryParams = field()
    

@dataclass
class GetAmendmentsResponse:
    content_type: str = field()
    status_code: int = field()
    amendment_search_item_search_result: Optional[shared.AmendmentSearchItemSearchResult] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
