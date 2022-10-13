from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetBillsQueryParams:
    bill_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'BillIds', 'style': 'form', 'explode': True }})
    bill_stage: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'BillStage', 'style': 'form', 'explode': True }})
    bill_stages_excluded: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'BillStagesExcluded', 'style': 'form', 'explode': True }})
    bill_type: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'BillType', 'style': 'form', 'explode': True }})
    current_house: Optional[shared.HouseEnum] = field(default=None, metadata={'query_param': { 'field_name': 'CurrentHouse', 'style': 'form', 'explode': True }})
    department_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DepartmentId', 'style': 'form', 'explode': True }})
    is_defeated: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IsDefeated', 'style': 'form', 'explode': True }})
    is_withdrawn: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IsWithdrawn', 'style': 'form', 'explode': True }})
    member_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MemberId', 'style': 'form', 'explode': True }})
    originating_house: Optional[shared.OriginatingHouseEnum] = field(default=None, metadata={'query_param': { 'field_name': 'OriginatingHouse', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SearchTerm', 'style': 'form', 'explode': True }})
    session: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Session', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.BillSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SortOrder', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBillsRequest:
    query_params: GetBillsQueryParams = field(default=None)
    

@dataclass
class GetBillsResponse:
    bill_summary_search_result: Optional[shared.BillSummarySearchResult] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
