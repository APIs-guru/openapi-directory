from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import codecprofile
from . import containerprofile
from . import directplayprofile
from . import deviceidentification
from . import responseprofile
from . import subtitleprofile
from . import transcodingprofile
from . import xmlattribute


@dataclass_json
@dataclass
class DeviceProfile:
    album_art_pn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumArtPn' }})
    codec_profiles: Optional[List[codecprofile.CodecProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodecProfiles' }})
    container_profiles: Optional[List[containerprofile.ContainerProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerProfiles' }})
    direct_play_profiles: Optional[List[directplayprofile.DirectPlayProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectPlayProfiles' }})
    enable_album_art_in_didl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAlbumArtInDidl' }})
    enable_ms_media_receiver_registrar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableMSMediaReceiverRegistrar' }})
    enable_single_album_art_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSingleAlbumArtLimit' }})
    enable_single_subtitle_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSingleSubtitleLimit' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FriendlyName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    identification: Optional[deviceidentification.DeviceIdentification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    ignore_transcode_byte_range_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreTranscodeByteRangeRequests' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Manufacturer' }})
    manufacturer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManufacturerUrl' }})
    max_album_art_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAlbumArtHeight' }})
    max_album_art_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAlbumArtWidth' }})
    max_icon_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxIconHeight' }})
    max_icon_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxIconWidth' }})
    max_static_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxStaticBitrate' }})
    max_static_music_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxStaticMusicBitrate' }})
    max_streaming_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxStreamingBitrate' }})
    model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDescription' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelNumber' }})
    model_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelUrl' }})
    music_streaming_transcoding_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MusicStreamingTranscodingBitrate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    protocol_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolInfo' }})
    requires_plain_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiresPlainFolders' }})
    requires_plain_video_items: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiresPlainVideoItems' }})
    response_profiles: Optional[List[responseprofile.ResponseProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseProfiles' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerialNumber' }})
    sony_aggregation_flags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SonyAggregationFlags' }})
    subtitle_profiles: Optional[List[subtitleprofile.SubtitleProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubtitleProfiles' }})
    supported_media_types: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedMediaTypes' }})
    timeline_offset_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimelineOffsetSeconds' }})
    transcoding_profiles: Optional[List[transcodingprofile.TranscodingProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscodingProfiles' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    xml_root_attributes: Optional[List[xmlattribute.XMLAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XmlRootAttributes' }})
    
