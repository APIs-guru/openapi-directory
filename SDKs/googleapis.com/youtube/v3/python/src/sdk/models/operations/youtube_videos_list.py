from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class YoutubeVideosListChartEnum(str, Enum):
    CHART_UNSPECIFIED = "chartUnspecified"
    MOST_POPULAR = "mostPopular"

class YoutubeVideosListMyRatingEnum(str, Enum):
    NONE = "none"
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass
class YoutubeVideosListQueryParams:
    part: List[str] = field(metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    chart: Optional[YoutubeVideosListChartEnum] = field(default=None, metadata={'query_param': { 'field_name': 'chart', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    hl: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hl', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxHeight', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    max_width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxWidth', 'style': 'form', 'explode': True }})
    my_rating: Optional[YoutubeVideosListMyRatingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'myRating', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    region_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionCode', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    video_category_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoCategoryId', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeVideosListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosListSecurity:
    option1: Optional[YoutubeVideosListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeVideosListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeVideosListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[YoutubeVideosListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class YoutubeVideosListRequest:
    query_params: YoutubeVideosListQueryParams = field()
    security: YoutubeVideosListSecurity = field()
    

@dataclass
class YoutubeVideosListResponse:
    content_type: str = field()
    status_code: int = field()
    video_list_response: Optional[shared.VideoListResponse] = field(default=None)
    
