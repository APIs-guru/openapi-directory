from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class YoutubeSearchListChannelTypeEnum(str, Enum):
    CHANNEL_TYPE_UNSPECIFIED = "channelTypeUnspecified"
    ANY = "any"
    SHOW = "show"

class YoutubeSearchListEventTypeEnum(str, Enum):
    NONE = "none"
    UPCOMING = "upcoming"
    LIVE = "live"
    COMPLETED = "completed"

class YoutubeSearchListOrderEnum(str, Enum):
    SEARCH_SORT_UNSPECIFIED = "searchSortUnspecified"
    DATE = "date"
    RATING = "rating"
    VIEW_COUNT = "viewCount"
    RELEVANCE = "relevance"
    TITLE = "title"
    VIDEO_COUNT = "videoCount"

class YoutubeSearchListSafeSearchEnum(str, Enum):
    SAFE_SEARCH_SETTING_UNSPECIFIED = "safeSearchSettingUnspecified"
    NONE = "none"
    MODERATE = "moderate"
    STRICT = "strict"

class YoutubeSearchListVideoCaptionEnum(str, Enum):
    VIDEO_CAPTION_UNSPECIFIED = "videoCaptionUnspecified"
    ANY = "any"
    CLOSED_CAPTION = "closedCaption"
    NONE = "none"

class YoutubeSearchListVideoDefinitionEnum(str, Enum):
    ANY = "any"
    STANDARD = "standard"
    HIGH = "high"

class YoutubeSearchListVideoDimensionEnum(str, Enum):
    ANY = "any"
    TWOD = "2d"
    THREED = "3d"

class YoutubeSearchListVideoDurationEnum(str, Enum):
    VIDEO_DURATION_UNSPECIFIED = "videoDurationUnspecified"
    ANY = "any"
    SHORT = "short"
    MEDIUM = "medium"
    LONG = "long"

class YoutubeSearchListVideoEmbeddableEnum(str, Enum):
    VIDEO_EMBEDDABLE_UNSPECIFIED = "videoEmbeddableUnspecified"
    ANY = "any"
    TRUE = "true"

class YoutubeSearchListVideoLicenseEnum(str, Enum):
    ANY = "any"
    YOUTUBE = "youtube"
    CREATIVE_COMMON = "creativeCommon"

class YoutubeSearchListVideoSyndicatedEnum(str, Enum):
    VIDEO_SYNDICATED_UNSPECIFIED = "videoSyndicatedUnspecified"
    ANY = "any"
    TRUE = "true"

class YoutubeSearchListVideoTypeEnum(str, Enum):
    VIDEO_TYPE_UNSPECIFIED = "videoTypeUnspecified"
    ANY = "any"
    MOVIE = "movie"
    EPISODE = "episode"


@dataclass
class YoutubeSearchListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'channelId', 'style': 'form', 'explode': True }})
    channel_type: Optional[YoutubeSearchListChannelTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'channelType', 'style': 'form', 'explode': True }})
    event_type: Optional[YoutubeSearchListEventTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'eventType', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    for_content_owner: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forContentOwner', 'style': 'form', 'explode': True }})
    for_developer: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forDeveloper', 'style': 'form', 'explode': True }})
    for_mine: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forMine', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    location_radius: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationRadius', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    order: Optional[YoutubeSearchListOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    part: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    published_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publishedAfter', 'style': 'form', 'explode': True }})
    published_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publishedBefore', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    region_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionCode', 'style': 'form', 'explode': True }})
    related_to_video_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'relatedToVideoId', 'style': 'form', 'explode': True }})
    relevance_language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'relevanceLanguage', 'style': 'form', 'explode': True }})
    safe_search: Optional[YoutubeSearchListSafeSearchEnum] = field(default=None, metadata={'query_param': { 'field_name': 'safeSearch', 'style': 'form', 'explode': True }})
    topic_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'topicId', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    video_caption: Optional[YoutubeSearchListVideoCaptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoCaption', 'style': 'form', 'explode': True }})
    video_category_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoCategoryId', 'style': 'form', 'explode': True }})
    video_definition: Optional[YoutubeSearchListVideoDefinitionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoDefinition', 'style': 'form', 'explode': True }})
    video_dimension: Optional[YoutubeSearchListVideoDimensionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoDimension', 'style': 'form', 'explode': True }})
    video_duration: Optional[YoutubeSearchListVideoDurationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoDuration', 'style': 'form', 'explode': True }})
    video_embeddable: Optional[YoutubeSearchListVideoEmbeddableEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoEmbeddable', 'style': 'form', 'explode': True }})
    video_license: Optional[YoutubeSearchListVideoLicenseEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoLicense', 'style': 'form', 'explode': True }})
    video_syndicated: Optional[YoutubeSearchListVideoSyndicatedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoSyndicated', 'style': 'form', 'explode': True }})
    video_type: Optional[YoutubeSearchListVideoTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoType', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeSearchListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeSearchListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeSearchListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeSearchListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeSearchListSecurity:
    option1: Optional[YoutubeSearchListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeSearchListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeSearchListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[YoutubeSearchListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class YoutubeSearchListRequest:
    query_params: YoutubeSearchListQueryParams = field(default=None)
    security: YoutubeSearchListSecurity = field(default=None)
    

@dataclass
class YoutubeSearchListResponse:
    content_type: str = field(default=None)
    search_list_response: Optional[shared.SearchListResponse] = field(default=None)
    status_code: int = field(default=None)
    
