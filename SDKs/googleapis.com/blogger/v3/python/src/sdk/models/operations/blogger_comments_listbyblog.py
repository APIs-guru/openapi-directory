from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class BloggerCommentsListByBlogPathParams:
    blog_id: str = field(default=None, metadata={'path_param': { 'field_name': 'blogId', 'style': 'simple', 'explode': False }})
    
class BloggerCommentsListByBlogStatusEnum(str, Enum):
    LIVE = "LIVE"
    EMPTIED = "EMPTIED"
    PENDING = "PENDING"
    SPAM = "SPAM"


@dataclass
class BloggerCommentsListByBlogQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    fetch_bodies: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fetchBodies', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    status: Optional[List[BloggerCommentsListByBlogStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerCommentsListByBlogSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerCommentsListByBlogSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerCommentsListByBlogSecurity:
    option1: Optional[BloggerCommentsListByBlogSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BloggerCommentsListByBlogSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BloggerCommentsListByBlogRequest:
    path_params: BloggerCommentsListByBlogPathParams = field(default=None)
    query_params: BloggerCommentsListByBlogQueryParams = field(default=None)
    security: BloggerCommentsListByBlogSecurity = field(default=None)
    

@dataclass
class BloggerCommentsListByBlogResponse:
    comment_list: Optional[shared.CommentList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
