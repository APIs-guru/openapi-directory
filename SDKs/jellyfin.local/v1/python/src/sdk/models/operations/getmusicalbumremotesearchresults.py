from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMusicAlbumRemoteSearchResultsRequests:
    album_info_remote_search_query: Optional[shared.AlbumInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    album_info_remote_search_query1: Optional[shared.AlbumInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    album_info_remote_search_query2: Optional[shared.AlbumInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetMusicAlbumRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMusicAlbumRemoteSearchResultsRequest:
    request: GetMusicAlbumRemoteSearchResultsRequests = field()
    security: GetMusicAlbumRemoteSearchResultsSecurity = field()
    

@dataclass
class GetMusicAlbumRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
