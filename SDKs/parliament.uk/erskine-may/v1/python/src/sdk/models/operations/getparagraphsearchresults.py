from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetParagraphSearchResultsPathParams:
    search_term: str = field(default=None, metadata={'path_param': { 'field_name': 'searchTerm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParagraphSearchResultsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetParagraphSearchResultsRequest:
    path_params: GetParagraphSearchResultsPathParams = field(default=None)
    query_params: GetParagraphSearchResultsQueryParams = field(default=None)
    

@dataclass
class GetParagraphSearchResultsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_search_erskine_may_paragraph_search_result_: Optional[shared.ErskineMaySearchErskineMayParagraphSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
