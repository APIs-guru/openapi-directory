from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMusicVideoRemoteSearchResultsRequests:
    music_video_info_remote_search_query: Optional[shared.MusicVideoInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    music_video_info_remote_search_query1: Optional[shared.MusicVideoInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    music_video_info_remote_search_query2: Optional[shared.MusicVideoInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetMusicVideoRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMusicVideoRemoteSearchResultsRequest:
    request: GetMusicVideoRemoteSearchResultsRequests = field(default=None)
    security: GetMusicVideoRemoteSearchResultsSecurity = field(default=None)
    

@dataclass
class GetMusicVideoRemoteSearchResultsResponse:
    content_type: str = field(default=None)
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    status_code: int = field(default=None)
    
