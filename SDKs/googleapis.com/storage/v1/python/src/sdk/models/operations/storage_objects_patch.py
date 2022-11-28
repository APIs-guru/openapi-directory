from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageObjectsPatchPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    
class StorageObjectsPatchPredefinedACLEnum(str, Enum):
    AUTHENTICATED_READ = "authenticatedRead"
    BUCKET_OWNER_FULL_CONTROL = "bucketOwnerFullControl"
    BUCKET_OWNER_READ = "bucketOwnerRead"
    PRIVATE = "private"
    PROJECT_PRIVATE = "projectPrivate"
    PUBLIC_READ = "publicRead"

class StorageObjectsPatchProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageObjectsPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    generation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'generation', 'style': 'form', 'explode': True }})
    if_generation_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationMatch', 'style': 'form', 'explode': True }})
    if_generation_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationNotMatch', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    predefined_acl: Optional[StorageObjectsPatchPredefinedACLEnum] = field(default=None, metadata={'query_param': { 'field_name': 'predefinedAcl', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsPatchProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageObjectsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsPatchSecurity:
    option1: Optional[StorageObjectsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageObjectsPatchRequest:
    path_params: StorageObjectsPatchPathParams = field()
    query_params: StorageObjectsPatchQueryParams = field()
    security: StorageObjectsPatchSecurity = field()
    request: Optional[shared.Object] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageObjectsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    object: Optional[shared.Object] = field(default=None)
    
