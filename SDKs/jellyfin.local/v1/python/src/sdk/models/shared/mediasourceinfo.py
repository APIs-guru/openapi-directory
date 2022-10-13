from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mediaprotocol_enum
from . import isotype_enum
from . import mediaattachment
from . import mediastream
from . import mediaprotocol_enum
from . import transportstreamtimestamp_enum
from . import mediasourcetype_enum
from . import video3dformat_enum
from . import videotype_enum


@dataclass_json
@dataclass
class MediaSourceInfo:
    analyze_duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyzeDurationMs' }})
    bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bitrate' }})
    buffer_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferMs' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    default_audio_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAudioStreamIndex' }})
    default_subtitle_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubtitleStreamIndex' }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ETag' }})
    encoder_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncoderPath' }})
    encoder_protocol: Optional[mediaprotocol_enum.MediaProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncoderProtocol' }})
    formats: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Formats' }})
    gen_pts_input: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GenPtsInput' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    ignore_dts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreDts' }})
    ignore_index: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreIndex' }})
    is_infinite_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsInfiniteStream' }})
    is_remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRemote' }})
    iso_type: Optional[isotype_enum.IsoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsoType' }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LiveStreamId' }})
    media_attachments: Optional[List[mediaattachment.MediaAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaAttachments' }})
    media_streams: Optional[List[mediastream.MediaStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaStreams' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    open_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenToken' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    protocol: Optional[mediaprotocol_enum.MediaProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    read_at_native_framerate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadAtNativeFramerate' }})
    required_http_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiredHttpHeaders' }})
    requires_closing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiresClosing' }})
    requires_looping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiresLooping' }})
    requires_opening: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiresOpening' }})
    run_time_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunTimeTicks' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    supports_direct_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsDirectPlay' }})
    supports_direct_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsDirectStream' }})
    supports_probing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsProbing' }})
    supports_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsTranscoding' }})
    timestamp: Optional[transportstreamtimestamp_enum.TransportStreamTimestampEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    transcoding_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscodingContainer' }})
    transcoding_sub_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscodingSubProtocol' }})
    transcoding_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscodingUrl' }})
    type: Optional[mediasourcetype_enum.MediaSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    video3_d_format: Optional[video3dformat_enum.Video3DFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Video3DFormat' }})
    video_type: Optional[videotype_enum.VideoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoType' }})
    
