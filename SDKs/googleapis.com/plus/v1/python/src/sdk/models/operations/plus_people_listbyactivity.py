from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PlusPeopleListByActivityCollectionEnum(str, Enum):
    PLUSONERS = "plusoners"
    RESHARERS = "resharers"


@dataclass
class PlusPeopleListByActivityPathParams:
    activity_id: str = field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    collection: PlusPeopleListByActivityCollectionEnum = field(metadata={'path_param': { 'field_name': 'collection', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlusPeopleListByActivityQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class PlusPeopleListByActivitySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PlusPeopleListByActivitySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PlusPeopleListByActivitySecurity:
    option1: Optional[PlusPeopleListByActivitySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PlusPeopleListByActivitySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PlusPeopleListByActivityRequest:
    path_params: PlusPeopleListByActivityPathParams = field()
    query_params: PlusPeopleListByActivityQueryParams = field()
    security: PlusPeopleListByActivitySecurity = field()
    

@dataclass
class PlusPeopleListByActivityResponse:
    content_type: str = field()
    status_code: int = field()
    people_feed: Optional[shared.PeopleFeed] = field(default=None)
    
