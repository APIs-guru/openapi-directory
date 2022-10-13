from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIndexTermSearchResultsPathParams:
    search_term: str = field(default=None, metadata={'path_param': { 'field_name': 'searchTerm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIndexTermSearchResultsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIndexTermSearchResultsRequest:
    path_params: GetIndexTermSearchResultsPathParams = field(default=None)
    query_params: GetIndexTermSearchResultsQueryParams = field(default=None)
    

@dataclass
class GetIndexTermSearchResultsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_search_erskine_may_index_term_search_result_: Optional[shared.ErskineMaySearchErskineMayIndexTermSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
