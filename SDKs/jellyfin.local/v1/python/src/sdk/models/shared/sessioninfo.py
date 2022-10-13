from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sessionuserinfo
from . import clientcapabilities
from . import baseitem
from . import baseitemdto
from . import queueitem
from . import baseitemdto
from . import playerstateinfo
from . import generalcommandtype_enum
from . import transcodinginfo


@dataclass_json
@dataclass
class SessionInfo:
    additional_users: Optional[List[sessionuserinfo.SessionUserInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalUsers' }})
    application_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersion' }})
    capabilities: Optional[clientcapabilities.ClientCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Capabilities' }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Client' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceType' }})
    full_now_playing_item: Optional[baseitem.BaseItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullNowPlayingItem' }})
    has_custom_device_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasCustomDeviceName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsActive' }})
    last_activity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastActivityDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_playback_check_in: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPlaybackCheckIn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    now_playing_item: Optional[baseitemdto.BaseItemDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NowPlayingItem' }})
    now_playing_queue: Optional[List[queueitem.QueueItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NowPlayingQueue' }})
    now_viewing_item: Optional[baseitemdto.BaseItemDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NowViewingItem' }})
    play_state: Optional[playerstateinfo.PlayerStateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayState' }})
    playable_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayableMediaTypes' }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaylistItemId' }})
    remote_end_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteEndPoint' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    supported_commands: Optional[List[generalcommandtype_enum.GeneralCommandTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedCommands' }})
    supports_media_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsMediaControl' }})
    supports_remote_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsRemoteControl' }})
    transcoding_info: Optional[transcodinginfo.TranscodingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscodingInfo' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    user_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPrimaryImageTag' }})
    
