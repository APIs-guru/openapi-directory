from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BloggerPostsPatchPathParams:
    blog_id: str = field(default=None, metadata={'path_param': { 'field_name': 'blogId', 'style': 'simple', 'explode': False }})
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'postId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BloggerPostsPatchQueryParams:
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
    publish: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'publish', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    revert: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'revert', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerPostsPatchSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerPostsPatchRequest:
    path_params: BloggerPostsPatchPathParams = field(default=None)
    query_params: BloggerPostsPatchQueryParams = field(default=None)
    request: Optional[shared.Post] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BloggerPostsPatchSecurity = field(default=None)
    

@dataclass
class BloggerPostsPatchResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    
