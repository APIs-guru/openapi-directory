from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetHlsVideoSegmentLegacyPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    segment_container: str = field(metadata={'path_param': { 'field_name': 'segmentContainer', 'style': 'simple', 'explode': False }})
    segment_id: str = field(metadata={'path_param': { 'field_name': 'segmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHlsVideoSegmentLegacyRequest:
    path_params: GetHlsVideoSegmentLegacyPathParams = field()
    

@dataclass
class GetHlsVideoSegmentLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    get_hls_video_segment_legacy_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
