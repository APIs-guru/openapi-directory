from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTrailerRemoteSearchResultsRequests:
    trailer_info_remote_search_query: Optional[shared.TrailerInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    trailer_info_remote_search_query1: Optional[shared.TrailerInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    trailer_info_remote_search_query2: Optional[shared.TrailerInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetTrailerRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTrailerRemoteSearchResultsRequest:
    request: GetTrailerRemoteSearchResultsRequests = field(default=None)
    security: GetTrailerRemoteSearchResultsSecurity = field(default=None)
    

@dataclass
class GetTrailerRemoteSearchResultsResponse:
    content_type: str = field(default=None)
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    status_code: int = field(default=None)
    
