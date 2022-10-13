from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetAPIV1BillTypesQueryParams:
    category: Optional[shared.BillTypeCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Category', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1BillTypesRequest:
    query_params: GetAPIV1BillTypesQueryParams = field(default=None)
    

@dataclass
class GetAPIV1BillTypesResponse:
    bill_type_search_result: Optional[shared.BillTypeSearchResult] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
