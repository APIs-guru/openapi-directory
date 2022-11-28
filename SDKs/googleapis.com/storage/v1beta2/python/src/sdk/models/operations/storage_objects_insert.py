from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageObjectsInsertPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    
class StorageObjectsInsertProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageObjectsInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    if_generation_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationMatch', 'style': 'form', 'explode': True }})
    if_generation_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationNotMatch', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsInsertProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageObjectsInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsInsertSecurity:
    option1: Optional[StorageObjectsInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageObjectsInsertRequest:
    path_params: StorageObjectsInsertPathParams = field()
    query_params: StorageObjectsInsertQueryParams = field()
    security: StorageObjectsInsertSecurity = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class StorageObjectsInsertResponse:
    content_type: str = field()
    status_code: int = field()
    object: Optional[shared.Object] = field(default=None)
    
