from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubtitlePlaylistPathParams:
    index: int = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    media_source_id: str = field(metadata={'path_param': { 'field_name': 'mediaSourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubtitlePlaylistQueryParams:
    segment_length: int = field(metadata={'query_param': { 'field_name': 'segmentLength', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubtitlePlaylistSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSubtitlePlaylistRequest:
    path_params: GetSubtitlePlaylistPathParams = field()
    query_params: GetSubtitlePlaylistQueryParams = field()
    security: GetSubtitlePlaylistSecurity = field()
    

@dataclass
class GetSubtitlePlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    get_subtitle_playlist_200_application_x_mpegurl_binary_string: Optional[bytes] = field(default=None)
    
