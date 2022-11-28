from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMovieRemoteSearchResultsRequests:
    movie_info_remote_search_query: Optional[shared.MovieInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    movie_info_remote_search_query1: Optional[shared.MovieInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    movie_info_remote_search_query2: Optional[shared.MovieInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetMovieRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMovieRemoteSearchResultsRequest:
    request: GetMovieRemoteSearchResultsRequests = field()
    security: GetMovieRemoteSearchResultsSecurity = field()
    

@dataclass
class GetMovieRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
