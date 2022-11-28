from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMusicArtistRemoteSearchResultsRequests:
    artist_info_remote_search_query: Optional[shared.ArtistInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    artist_info_remote_search_query1: Optional[shared.ArtistInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    artist_info_remote_search_query2: Optional[shared.ArtistInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetMusicArtistRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMusicArtistRemoteSearchResultsRequest:
    request: GetMusicArtistRemoteSearchResultsRequests = field()
    security: GetMusicArtistRemoteSearchResultsSecurity = field()
    

@dataclass
class GetMusicArtistRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
