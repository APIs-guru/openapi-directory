from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BloggerBlogsGetPathParams:
    blog_id: str = field(metadata={'path_param': { 'field_name': 'blogId', 'style': 'simple', 'explode': False }})
    
class BloggerBlogsGetViewEnum(str, Enum):
    VIEW_TYPE_UNSPECIFIED = "VIEW_TYPE_UNSPECIFIED"
    READER = "READER"
    AUTHOR = "AUTHOR"
    ADMIN = "ADMIN"


@dataclass
class BloggerBlogsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_posts: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxPosts', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[BloggerBlogsGetViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerBlogsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerBlogsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerBlogsGetSecurity:
    option1: Optional[BloggerBlogsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BloggerBlogsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BloggerBlogsGetRequest:
    path_params: BloggerBlogsGetPathParams = field()
    query_params: BloggerBlogsGetQueryParams = field()
    security: BloggerBlogsGetSecurity = field()
    

@dataclass
class BloggerBlogsGetResponse:
    content_type: str = field()
    status_code: int = field()
    blog: Optional[shared.Blog] = field(default=None)
    
