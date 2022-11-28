from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageBucketsUpdatePathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    
class StorageBucketsUpdateProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageBucketsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageBucketsUpdateProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageBucketsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsUpdateSecurity:
    option1: Optional[StorageBucketsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageBucketsUpdateRequest:
    path_params: StorageBucketsUpdatePathParams = field()
    query_params: StorageBucketsUpdateQueryParams = field()
    security: StorageBucketsUpdateSecurity = field()
    request: Optional[shared.Bucket] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageBucketsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    bucket: Optional[shared.Bucket] = field(default=None)
    
