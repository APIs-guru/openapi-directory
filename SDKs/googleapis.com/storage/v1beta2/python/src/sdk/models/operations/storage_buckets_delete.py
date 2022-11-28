from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageBucketsDeletePathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageBucketsDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageBucketsDeleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsDeleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsDeleteSecurity:
    option1: Optional[StorageBucketsDeleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketsDeleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageBucketsDeleteRequest:
    path_params: StorageBucketsDeletePathParams = field()
    query_params: StorageBucketsDeleteQueryParams = field()
    security: StorageBucketsDeleteSecurity = field()
    

@dataclass
class StorageBucketsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
