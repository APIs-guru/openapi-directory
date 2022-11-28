from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHlsPlaylistLegacyPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHlsPlaylistLegacySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetHlsPlaylistLegacyRequest:
    path_params: GetHlsPlaylistLegacyPathParams = field()
    security: GetHlsPlaylistLegacySecurity = field()
    

@dataclass
class GetHlsPlaylistLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    get_hls_playlist_legacy_200_application_x_mpegurl_binary_string: Optional[bytes] = field(default=None)
    
