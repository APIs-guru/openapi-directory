from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SessionInfo:
    r"""SessionInfo
    Class SessionInfo.
    """
    
    additional_users: Optional[List[SessionUserInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalUsers') }})
    application_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersion') }})
    capabilities: Optional[ClientCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capabilities') }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Client') }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceType') }})
    full_now_playing_item: Optional[BaseItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullNowPlayingItem') }})
    has_custom_device_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasCustomDeviceName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsActive') }})
    last_activity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastActivityDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_playback_check_in: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPlaybackCheckIn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    now_playing_item: Optional[BaseItemDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NowPlayingItem') }})
    now_playing_queue: Optional[List[QueueItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NowPlayingQueue') }})
    now_viewing_item: Optional[BaseItemDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NowViewingItem') }})
    play_state: Optional[PlayerStateInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayState') }})
    playable_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayableMediaTypes') }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaylistItemId') }})
    remote_end_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteEndPoint') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    supported_commands: Optional[List[GeneralCommandTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedCommands') }})
    supports_media_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportsMediaControl') }})
    supports_remote_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportsRemoteControl') }})
    transcoding_info: Optional[TranscodingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscodingInfo') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    user_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPrimaryImageTag') }})
    
