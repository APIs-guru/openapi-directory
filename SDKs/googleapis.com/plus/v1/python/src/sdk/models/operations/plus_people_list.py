from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PlusPeopleListCollectionEnum(str, Enum):
    CONNECTED = "connected"
    VISIBLE = "visible"


@dataclass
class PlusPeopleListPathParams:
    collection: PlusPeopleListCollectionEnum = field(metadata={'path_param': { 'field_name': 'collection', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class PlusPeopleListOrderByEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    BEST = "best"


@dataclass
class PlusPeopleListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[PlusPeopleListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class PlusPeopleListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PlusPeopleListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PlusPeopleListSecurity:
    option1: Optional[PlusPeopleListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PlusPeopleListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PlusPeopleListRequest:
    path_params: PlusPeopleListPathParams = field()
    query_params: PlusPeopleListQueryParams = field()
    security: PlusPeopleListSecurity = field()
    

@dataclass
class PlusPeopleListResponse:
    content_type: str = field()
    status_code: int = field()
    people_feed: Optional[shared.PeopleFeed] = field(default=None)
    
