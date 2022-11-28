from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlaylistItemSnippet:
    r"""PlaylistItemSnippet
    Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
    """
    
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTitle') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    playlist_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistId') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: Optional[ResourceID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    thumbnails: Optional[ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    video_owner_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoOwnerChannelId') }})
    video_owner_channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoOwnerChannelTitle') }})
    
