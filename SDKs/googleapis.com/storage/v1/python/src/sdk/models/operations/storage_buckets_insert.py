from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class StorageBucketsInsertPredefinedACLEnum(str, Enum):
    AUTHENTICATED_READ = "authenticatedRead"
    PRIVATE = "private"
    PROJECT_PRIVATE = "projectPrivate"
    PUBLIC_READ = "publicRead"
    PUBLIC_READ_WRITE = "publicReadWrite"

class StorageBucketsInsertPredefinedDefaultObjectACLEnum(str, Enum):
    AUTHENTICATED_READ = "authenticatedRead"
    BUCKET_OWNER_FULL_CONTROL = "bucketOwnerFullControl"
    BUCKET_OWNER_READ = "bucketOwnerRead"
    PRIVATE = "private"
    PROJECT_PRIVATE = "projectPrivate"
    PUBLIC_READ = "publicRead"

class StorageBucketsInsertProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageBucketsInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    predefined_acl: Optional[StorageBucketsInsertPredefinedACLEnum] = field(default=None, metadata={'query_param': { 'field_name': 'predefinedAcl', 'style': 'form', 'explode': True }})
    predefined_default_object_acl: Optional[StorageBucketsInsertPredefinedDefaultObjectACLEnum] = field(default=None, metadata={'query_param': { 'field_name': 'predefinedDefaultObjectAcl', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    project: str = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    projection: Optional[StorageBucketsInsertProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageBucketsInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsInsertSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsInsertSecurity:
    option1: Optional[StorageBucketsInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketsInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageBucketsInsertSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageBucketsInsertRequest:
    query_params: StorageBucketsInsertQueryParams = field(default=None)
    request: Optional[shared.Bucket] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StorageBucketsInsertSecurity = field(default=None)
    

@dataclass
class StorageBucketsInsertResponse:
    bucket: Optional[shared.Bucket] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
