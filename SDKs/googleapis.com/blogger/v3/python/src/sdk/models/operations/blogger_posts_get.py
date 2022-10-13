from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BloggerPostsGetPathParams:
    blog_id: str = field(default=None, metadata={'path_param': { 'field_name': 'blogId', 'style': 'simple', 'explode': False }})
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'postId', 'style': 'simple', 'explode': False }})
    
class BloggerPostsGetViewEnum(str, Enum):
    VIEW_TYPE_UNSPECIFIED = "VIEW_TYPE_UNSPECIFIED"
    READER = "READER"
    AUTHOR = "AUTHOR"
    ADMIN = "ADMIN"


@dataclass
class BloggerPostsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fetch_body: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fetchBody', 'style': 'form', 'explode': True }})
    fetch_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fetchImages', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_comments: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxComments', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[BloggerPostsGetViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerPostsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerPostsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerPostsGetSecurity:
    option1: Optional[BloggerPostsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BloggerPostsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BloggerPostsGetRequest:
    path_params: BloggerPostsGetPathParams = field(default=None)
    query_params: BloggerPostsGetQueryParams = field(default=None)
    security: BloggerPostsGetSecurity = field(default=None)
    

@dataclass
class BloggerPostsGetResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    
