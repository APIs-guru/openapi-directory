from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageObjectsWatchAllPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    
class StorageObjectsWatchAllProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageObjectsWatchAllQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    delimiter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'delimiter', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsWatchAllProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    versions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'versions', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageObjectsWatchAllSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsWatchAllSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsWatchAllSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsWatchAllSecurity:
    option1: Optional[StorageObjectsWatchAllSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsWatchAllSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageObjectsWatchAllSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageObjectsWatchAllRequest:
    path_params: StorageObjectsWatchAllPathParams = field()
    query_params: StorageObjectsWatchAllQueryParams = field()
    security: StorageObjectsWatchAllSecurity = field()
    request: Optional[shared.Channel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageObjectsWatchAllResponse:
    content_type: str = field()
    status_code: int = field()
    channel: Optional[shared.Channel] = field(default=None)
    
