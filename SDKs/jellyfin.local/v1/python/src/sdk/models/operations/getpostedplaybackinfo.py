from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPostedPlaybackInfoPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPostedPlaybackInfoQueryParams:
    allow_audio_stream_copy: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowAudioStreamCopy', 'style': 'form', 'explode': True }})
    allow_video_stream_copy: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowVideoStreamCopy', 'style': 'form', 'explode': True }})
    audio_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioStreamIndex', 'style': 'form', 'explode': True }})
    auto_open_live_stream: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoOpenLiveStream', 'style': 'form', 'explode': True }})
    enable_direct_play: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableDirectPlay', 'style': 'form', 'explode': True }})
    enable_direct_stream: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableDirectStream', 'style': 'form', 'explode': True }})
    enable_transcoding: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableTranscoding', 'style': 'form', 'explode': True }})
    live_stream_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    max_audio_channels: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAudioChannels', 'style': 'form', 'explode': True }})
    max_streaming_bitrate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxStreamingBitrate', 'style': 'form', 'explode': True }})
    media_source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaSourceId', 'style': 'form', 'explode': True }})
    start_time_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startTimeTicks', 'style': 'form', 'explode': True }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'subtitleStreamIndex', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPostedPlaybackInfoRequests:
    playback_info_dto: Optional[shared.PlaybackInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    playback_info_dto1: Optional[shared.PlaybackInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    playback_info_dto2: Optional[shared.PlaybackInfoDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetPostedPlaybackInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPostedPlaybackInfoRequest:
    path_params: GetPostedPlaybackInfoPathParams = field(default=None)
    query_params: GetPostedPlaybackInfoQueryParams = field(default=None)
    request: Optional[GetPostedPlaybackInfoRequests] = field(default=None)
    security: GetPostedPlaybackInfoSecurity = field(default=None)
    

@dataclass
class GetPostedPlaybackInfoResponse:
    content_type: str = field(default=None)
    playback_info_response: Optional[shared.PlaybackInfoResponse] = field(default=None)
    status_code: int = field(default=None)
    
