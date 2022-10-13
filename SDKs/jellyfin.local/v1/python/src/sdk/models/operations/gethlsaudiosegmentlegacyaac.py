from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHlsAudioSegmentLegacyAacPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    segment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'segmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHlsAudioSegmentLegacyAacRequest:
    path_params: GetHlsAudioSegmentLegacyAacPathParams = field(default=None)
    

@dataclass
class GetHlsAudioSegmentLegacyAacResponse:
    content_type: str = field(default=None)
    get_hls_audio_segment_legacy_aac_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
