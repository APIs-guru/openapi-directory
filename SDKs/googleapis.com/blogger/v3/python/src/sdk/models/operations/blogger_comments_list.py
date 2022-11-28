from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BloggerCommentsListPathParams:
    blog_id: str = field(metadata={'path_param': { 'field_name': 'blogId', 'style': 'simple', 'explode': False }})
    post_id: str = field(metadata={'path_param': { 'field_name': 'postId', 'style': 'simple', 'explode': False }})
    
class BloggerCommentsListStatusEnum(str, Enum):
    LIVE = "LIVE"
    EMPTIED = "EMPTIED"
    PENDING = "PENDING"
    SPAM = "SPAM"

class BloggerCommentsListViewEnum(str, Enum):
    VIEW_TYPE_UNSPECIFIED = "VIEW_TYPE_UNSPECIFIED"
    READER = "READER"
    AUTHOR = "AUTHOR"
    ADMIN = "ADMIN"


@dataclass
class BloggerCommentsListQueryParams:
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
    status: Optional[BloggerCommentsListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[BloggerCommentsListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerCommentsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerCommentsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerCommentsListSecurity:
    option1: Optional[BloggerCommentsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BloggerCommentsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BloggerCommentsListRequest:
    path_params: BloggerCommentsListPathParams = field()
    query_params: BloggerCommentsListQueryParams = field()
    security: BloggerCommentsListSecurity = field()
    

@dataclass
class BloggerCommentsListResponse:
    content_type: str = field()
    status_code: int = field()
    comment_list: Optional[shared.CommentList] = field(default=None)
    
