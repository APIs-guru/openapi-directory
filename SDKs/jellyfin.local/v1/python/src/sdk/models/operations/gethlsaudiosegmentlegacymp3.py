from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHlsAudioSegmentLegacyMp3PathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    segment_id: str = field(metadata={'path_param': { 'field_name': 'segmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHlsAudioSegmentLegacyMp3Request:
    path_params: GetHlsAudioSegmentLegacyMp3PathParams = field()
    

@dataclass
class GetHlsAudioSegmentLegacyMp3Response:
    content_type: str = field()
    status_code: int = field()
    get_hls_audio_segment_legacy_mp3_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    
