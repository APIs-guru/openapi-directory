from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class StorageObjectsRewritePathParams:
    destination_bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'destinationBucket', 'style': 'simple', 'explode': False }})
    destination_object: str = field(default=None, metadata={'path_param': { 'field_name': 'destinationObject', 'style': 'simple', 'explode': False }})
    source_bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'sourceBucket', 'style': 'simple', 'explode': False }})
    source_object: str = field(default=None, metadata={'path_param': { 'field_name': 'sourceObject', 'style': 'simple', 'explode': False }})
    
class StorageObjectsRewriteDestinationPredefinedACLEnum(str, Enum):
    AUTHENTICATED_READ = "authenticatedRead"
    BUCKET_OWNER_FULL_CONTROL = "bucketOwnerFullControl"
    BUCKET_OWNER_READ = "bucketOwnerRead"
    PRIVATE = "private"
    PROJECT_PRIVATE = "projectPrivate"
    PUBLIC_READ = "publicRead"

class StorageObjectsRewriteProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageObjectsRewriteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    destination_kms_key_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destinationKmsKeyName', 'style': 'form', 'explode': True }})
    destination_predefined_acl: Optional[StorageObjectsRewriteDestinationPredefinedACLEnum] = field(default=None, metadata={'query_param': { 'field_name': 'destinationPredefinedAcl', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    if_generation_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationMatch', 'style': 'form', 'explode': True }})
    if_generation_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationNotMatch', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    if_source_generation_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifSourceGenerationMatch', 'style': 'form', 'explode': True }})
    if_source_generation_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifSourceGenerationNotMatch', 'style': 'form', 'explode': True }})
    if_source_metageneration_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifSourceMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_source_metageneration_not_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifSourceMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_bytes_rewritten_per_call: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxBytesRewrittenPerCall', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsRewriteProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    rewrite_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rewriteToken', 'style': 'form', 'explode': True }})
    source_generation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceGeneration', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageObjectsRewriteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsRewriteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsRewriteSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsRewriteSecurity:
    option1: Optional[StorageObjectsRewriteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsRewriteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageObjectsRewriteSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageObjectsRewriteRequest:
    path_params: StorageObjectsRewritePathParams = field(default=None)
    query_params: StorageObjectsRewriteQueryParams = field(default=None)
    request: Optional[shared.Object] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StorageObjectsRewriteSecurity = field(default=None)
    

@dataclass
class StorageObjectsRewriteResponse:
    content_type: str = field(default=None)
    rewrite_response: Optional[shared.RewriteResponse] = field(default=None)
    status_code: int = field(default=None)
    
