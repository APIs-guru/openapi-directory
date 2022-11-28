from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class StorageBucketsListProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageBucketsListQueryParams:
    project: str = field(metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageBucketsListProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageBucketsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsListSecurity:
    option1: Optional[StorageBucketsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageBucketsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[StorageBucketsListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[StorageBucketsListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageBucketsListRequest:
    query_params: StorageBucketsListQueryParams = field()
    security: StorageBucketsListSecurity = field()
    

@dataclass
class StorageBucketsListResponse:
    content_type: str = field()
    status_code: int = field()
    buckets: Optional[shared.Buckets] = field(default=None)
    
