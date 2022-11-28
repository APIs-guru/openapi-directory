from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPIV1BillTypesQueryParams:
    category: Optional[shared.BillTypeCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Category', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1BillTypesRequest:
    query_params: GetAPIV1BillTypesQueryParams = field()
    

@dataclass
class GetAPIV1BillTypesResponse:
    content_type: str = field()
    status_code: int = field()
    bill_type_search_result: Optional[shared.BillTypeSearchResult] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
