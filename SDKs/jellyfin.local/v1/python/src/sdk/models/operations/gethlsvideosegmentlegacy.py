from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetHlsVideoSegmentLegacyPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    segment_container: str = field(default=None, metadata={'path_param': { 'field_name': 'segmentContainer', 'style': 'simple', 'explode': False }})
    segment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'segmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHlsVideoSegmentLegacyRequest:
    path_params: GetHlsVideoSegmentLegacyPathParams = field(default=None)
    

@dataclass
class GetHlsVideoSegmentLegacyResponse:
    content_type: str = field(default=None)
    get_hls_video_segment_legacy_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
