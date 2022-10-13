from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SearchRemoteSubtitlesPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchRemoteSubtitlesQueryParams:
    is_perfect_match: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPerfectMatch', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchRemoteSubtitlesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchRemoteSubtitlesRequest:
    path_params: SearchRemoteSubtitlesPathParams = field(default=None)
    query_params: SearchRemoteSubtitlesQueryParams = field(default=None)
    security: SearchRemoteSubtitlesSecurity = field(default=None)
    

@dataclass
class SearchRemoteSubtitlesResponse:
    content_type: str = field(default=None)
    remote_subtitle_infos: Optional[List[shared.RemoteSubtitleInfo]] = field(default=None)
    status_code: int = field(default=None)
    
