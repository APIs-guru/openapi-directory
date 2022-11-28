from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BloggerPostsSearchPathParams:
    blog_id: str = field(metadata={'path_param': { 'field_name': 'blogId', 'style': 'simple', 'explode': False }})
    
class BloggerPostsSearchOrderByEnum(str, Enum):
    ORDER_BY_UNSPECIFIED = "ORDER_BY_UNSPECIFIED"
    PUBLISHED = "PUBLISHED"
    UPDATED = "UPDATED"


@dataclass
class BloggerPostsSearchQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fetch_bodies: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fetchBodies', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[BloggerPostsSearchOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerPostsSearchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerPostsSearchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerPostsSearchSecurity:
    option1: Optional[BloggerPostsSearchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BloggerPostsSearchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BloggerPostsSearchRequest:
    path_params: BloggerPostsSearchPathParams = field()
    query_params: BloggerPostsSearchQueryParams = field()
    security: BloggerPostsSearchSecurity = field()
    

@dataclass
class BloggerPostsSearchResponse:
    content_type: str = field()
    status_code: int = field()
    post_list: Optional[shared.PostList] = field(default=None)
    
