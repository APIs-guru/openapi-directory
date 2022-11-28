from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHlsAudioSegmentLegacyAacPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    segment_id: str = field(metadata={'path_param': { 'field_name': 'segmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHlsAudioSegmentLegacyAacRequest:
    path_params: GetHlsAudioSegmentLegacyAacPathParams = field()
    

@dataclass
class GetHlsAudioSegmentLegacyAacResponse:
    content_type: str = field()
    status_code: int = field()
    get_hls_audio_segment_legacy_aac_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    
