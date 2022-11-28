from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BloggerPageViewsGetPathParams:
    blog_id: str = field(metadata={'path_param': { 'field_name': 'blogId', 'style': 'simple', 'explode': False }})
    
class BloggerPageViewsGetRangeEnum(str, Enum):
    ALL = "all"
    THIRTY_DAYS = "30DAYS"
    SEVEN_DAYS = "7DAYS"


@dataclass
class BloggerPageViewsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    range: Optional[List[BloggerPageViewsGetRangeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'range', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerPageViewsGetSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerPageViewsGetRequest:
    path_params: BloggerPageViewsGetPathParams = field()
    query_params: BloggerPageViewsGetQueryParams = field()
    security: BloggerPageViewsGetSecurity = field()
    

@dataclass
class BloggerPageViewsGetResponse:
    content_type: str = field()
    status_code: int = field()
    pageviews: Optional[shared.Pageviews] = field(default=None)
    
