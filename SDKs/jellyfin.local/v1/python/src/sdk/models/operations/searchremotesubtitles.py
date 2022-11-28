from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SearchRemoteSubtitlesPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchRemoteSubtitlesQueryParams:
    is_perfect_match: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPerfectMatch', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchRemoteSubtitlesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchRemoteSubtitlesRequest:
    path_params: SearchRemoteSubtitlesPathParams = field()
    query_params: SearchRemoteSubtitlesQueryParams = field()
    security: SearchRemoteSubtitlesSecurity = field()
    

@dataclass
class SearchRemoteSubtitlesResponse:
    content_type: str = field()
    status_code: int = field()
    remote_subtitle_infos: Optional[List[shared.RemoteSubtitleInfo]] = field(default=None)
    
