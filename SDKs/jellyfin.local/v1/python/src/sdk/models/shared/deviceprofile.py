from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceProfile:
    r"""DeviceProfile
    Defines the MediaBrowser.Model.Dlna.DeviceProfile.
    """
    
    album_art_pn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArtPn') }})
    codec_profiles: Optional[List[CodecProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodecProfiles') }})
    container_profiles: Optional[List[ContainerProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerProfiles') }})
    direct_play_profiles: Optional[List[DirectPlayProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectPlayProfiles') }})
    enable_album_art_in_didl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableAlbumArtInDidl') }})
    enable_ms_media_receiver_registrar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableMSMediaReceiverRegistrar') }})
    enable_single_album_art_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSingleAlbumArtLimit') }})
    enable_single_subtitle_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSingleSubtitleLimit') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FriendlyName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    identification: Optional[DeviceIdentification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    ignore_transcode_byte_range_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreTranscodeByteRangeRequests') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Manufacturer') }})
    manufacturer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManufacturerUrl') }})
    max_album_art_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAlbumArtHeight') }})
    max_album_art_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAlbumArtWidth') }})
    max_icon_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxIconHeight') }})
    max_icon_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxIconWidth') }})
    max_static_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxStaticBitrate') }})
    max_static_music_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxStaticMusicBitrate') }})
    max_streaming_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxStreamingBitrate') }})
    model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDescription') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    model_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelNumber') }})
    model_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelUrl') }})
    music_streaming_transcoding_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MusicStreamingTranscodingBitrate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    protocol_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolInfo') }})
    requires_plain_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiresPlainFolders') }})
    requires_plain_video_items: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiresPlainVideoItems') }})
    response_profiles: Optional[List[ResponseProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseProfiles') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerialNumber') }})
    sony_aggregation_flags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SonyAggregationFlags') }})
    subtitle_profiles: Optional[List[SubtitleProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleProfiles') }})
    supported_media_types: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedMediaTypes') }})
    timeline_offset_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimelineOffsetSeconds') }})
    transcoding_profiles: Optional[List[TranscodingProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscodingProfiles') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    xml_root_attributes: Optional[List[XMLAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XmlRootAttributes') }})
    
