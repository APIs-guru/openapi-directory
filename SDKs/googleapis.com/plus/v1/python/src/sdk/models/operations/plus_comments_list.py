from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PlusCommentsListPathParams:
    activity_id: str = field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    
class PlusCommentsListSortOrderEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"


@dataclass
class PlusCommentsListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sort_order: Optional[PlusCommentsListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class PlusCommentsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PlusCommentsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PlusCommentsListSecurity:
    option1: Optional[PlusCommentsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PlusCommentsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PlusCommentsListRequest:
    path_params: PlusCommentsListPathParams = field()
    query_params: PlusCommentsListQueryParams = field()
    security: PlusCommentsListSecurity = field()
    

@dataclass
class PlusCommentsListResponse:
    content_type: str = field()
    status_code: int = field()
    comment_feed: Optional[shared.CommentFeed] = field(default=None)
    
