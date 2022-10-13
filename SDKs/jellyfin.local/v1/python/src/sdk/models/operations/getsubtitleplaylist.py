from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSubtitlePlaylistPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    media_source_id: str = field(default=None, metadata={'path_param': { 'field_name': 'mediaSourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubtitlePlaylistQueryParams:
    segment_length: int = field(default=None, metadata={'query_param': { 'field_name': 'segmentLength', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubtitlePlaylistSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSubtitlePlaylistRequest:
    path_params: GetSubtitlePlaylistPathParams = field(default=None)
    query_params: GetSubtitlePlaylistQueryParams = field(default=None)
    security: GetSubtitlePlaylistSecurity = field(default=None)
    

@dataclass
class GetSubtitlePlaylistResponse:
    content_type: str = field(default=None)
    get_subtitle_playlist_200_application_x_mpegurl_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
