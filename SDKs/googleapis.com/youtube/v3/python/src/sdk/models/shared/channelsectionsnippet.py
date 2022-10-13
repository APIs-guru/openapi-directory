from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import channelsectionlocalization

class ChannelSectionSnippetStyleEnum(str, Enum):
    CHANNELSECTION_STYLE_UNSPECIFIED = "channelsectionStyleUnspecified"
    HORIZONTAL_ROW = "horizontalRow"
    VERTICAL_LIST = "verticalList"

class ChannelSectionSnippetTypeEnum(str, Enum):
    CHANNELSECTION_TYPE_UNDEFINED = "channelsectionTypeUndefined"
    SINGLE_PLAYLIST = "singlePlaylist"
    MULTIPLE_PLAYLISTS = "multiplePlaylists"
    POPULAR_UPLOADS = "popularUploads"
    RECENT_UPLOADS = "recentUploads"
    LIKES = "likes"
    ALL_PLAYLISTS = "allPlaylists"
    LIKED_PLAYLISTS = "likedPlaylists"
    RECENT_POSTS = "recentPosts"
    RECENT_ACTIVITY = "recentActivity"
    LIVE_EVENTS = "liveEvents"
    UPCOMING_EVENTS = "upcomingEvents"
    COMPLETED_EVENTS = "completedEvents"
    MULTIPLE_CHANNELS = "multipleChannels"
    POSTED_VIDEOS = "postedVideos"
    POSTED_PLAYLISTS = "postedPlaylists"
    SUBSCRIPTIONS = "subscriptions"


@dataclass_json
@dataclass
class ChannelSectionSnippet:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    localized: Optional[channelsectionlocalization.ChannelSectionLocalization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localized' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    style: Optional[ChannelSectionSnippetStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[ChannelSectionSnippetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
