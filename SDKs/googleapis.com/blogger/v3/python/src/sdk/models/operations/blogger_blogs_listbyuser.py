from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BloggerBlogsListByUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class BloggerBlogsListByUserRoleEnum(str, Enum):
    VIEW_TYPE_UNSPECIFIED = "VIEW_TYPE_UNSPECIFIED"
    READER = "READER"
    AUTHOR = "AUTHOR"
    ADMIN = "ADMIN"

class BloggerBlogsListByUserStatusEnum(str, Enum):
    LIVE = "LIVE"
    DELETED = "DELETED"

class BloggerBlogsListByUserViewEnum(str, Enum):
    VIEW_TYPE_UNSPECIFIED = "VIEW_TYPE_UNSPECIFIED"
    READER = "READER"
    AUTHOR = "AUTHOR"
    ADMIN = "ADMIN"


@dataclass
class BloggerBlogsListByUserQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fetch_user_info: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fetchUserInfo', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    role: Optional[List[BloggerBlogsListByUserRoleEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    status: Optional[List[BloggerBlogsListByUserStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[BloggerBlogsListByUserViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class BloggerBlogsListByUserSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerBlogsListByUserSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BloggerBlogsListByUserSecurity:
    option1: Optional[BloggerBlogsListByUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BloggerBlogsListByUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BloggerBlogsListByUserRequest:
    path_params: BloggerBlogsListByUserPathParams = field()
    query_params: BloggerBlogsListByUserQueryParams = field()
    security: BloggerBlogsListByUserSecurity = field()
    

@dataclass
class BloggerBlogsListByUserResponse:
    content_type: str = field()
    status_code: int = field()
    blog_list: Optional[shared.BlogList] = field(default=None)
    
