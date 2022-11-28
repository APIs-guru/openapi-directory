from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetBookRemoteSearchResultsRequests:
    book_info_remote_search_query: Optional[shared.BookInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    book_info_remote_search_query1: Optional[shared.BookInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    book_info_remote_search_query2: Optional[shared.BookInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetBookRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBookRemoteSearchResultsRequest:
    request: GetBookRemoteSearchResultsRequests = field()
    security: GetBookRemoteSearchResultsSecurity = field()
    

@dataclass
class GetBookRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
