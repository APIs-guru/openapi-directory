from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class YoutubeCommentThreadsListModerationStatusEnum(str, Enum):
    PUBLISHED = "published"
    HELD_FOR_REVIEW = "heldForReview"
    LIKELY_SPAM = "likelySpam"
    REJECTED = "rejected"

class YoutubeCommentThreadsListOrderEnum(str, Enum):
    ORDER_UNSPECIFIED = "orderUnspecified"
    TIME = "time"
    RELEVANCE = "relevance"

class YoutubeCommentThreadsListTextFormatEnum(str, Enum):
    TEXT_FORMAT_UNSPECIFIED = "textFormatUnspecified"
    HTML = "html"
    PLAIN_TEXT = "plainText"


@dataclass
class YoutubeCommentThreadsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    all_threads_related_to_channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allThreadsRelatedToChannelId', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'channelId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    moderation_status: Optional[YoutubeCommentThreadsListModerationStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'moderationStatus', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order: Optional[YoutubeCommentThreadsListOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    part: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_terms: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerms', 'style': 'form', 'explode': True }})
    text_format: Optional[YoutubeCommentThreadsListTextFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'textFormat', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    video_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoId', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeCommentThreadsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeCommentThreadsListRequest:
    query_params: YoutubeCommentThreadsListQueryParams = field(default=None)
    security: YoutubeCommentThreadsListSecurity = field(default=None)
    

@dataclass
class YoutubeCommentThreadsListResponse:
    comment_thread_list_response: Optional[shared.CommentThreadListResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
