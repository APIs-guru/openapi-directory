from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSectionSearchResultsPathParams:
    search_term: str = field(metadata={'path_param': { 'field_name': 'searchTerm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSectionSearchResultsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSectionSearchResultsRequest:
    path_params: GetSectionSearchResultsPathParams = field()
    query_params: GetSectionSearchResultsQueryParams = field()
    

@dataclass
class GetSectionSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erskine_may_search_erskine_may_section_search_result_: Optional[shared.ErskineMaySearchErskineMaySectionSearchResult] = field(default=None)
    
