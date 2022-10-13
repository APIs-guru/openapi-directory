from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BrowseIndexTermsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    start_letter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startLetter', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class BrowseIndexTermsRequest:
    query_params: BrowseIndexTermsQueryParams = field(default=None)
    

@dataclass
class BrowseIndexTermsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_search_erskine_may_index_term_search_result_: Optional[shared.ErskineMaySearchErskineMayIndexTermSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
