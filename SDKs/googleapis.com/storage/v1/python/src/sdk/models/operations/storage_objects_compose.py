from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageObjectsComposePathParams:
    destination_bucket: str = field(metadata={'path_param': { 'field_name': 'destinationBucket', 'style': 'simple', 'explode': False }})
    destination_object: str = field(metadata={'path_param': { 'field_name': 'destinationObject', 'style': 'simple', 'explode': False }})
    
class StorageObjectsComposeDestinationPredefinedACLEnum(str, Enum):
    AUTHENTICATED_READ = "authenticatedRead"
    BUCKET_OWNER_FULL_CONTROL = "bucketOwnerFullControl"
    BUCKET_OWNER_READ = "bucketOwnerRead"
    PRIVATE = "private"
    PROJECT_PRIVATE = "projectPrivate"
    PUBLIC_READ = "publicRead"


@dataclass
class StorageObjectsComposeQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    destination_predefined_acl: Optional[StorageObjectsComposeDestinationPredefinedACLEnum] = field(default=None, metadata={'query_param': { 'field_name': 'destinationPredefinedAcl', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    if_generation_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    kms_key_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'kmsKeyName', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageObjectsComposeSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsComposeSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsComposeSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsComposeSecurity:
    option1: Optional[StorageObjectsComposeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsComposeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageObjectsComposeSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageObjectsComposeRequest:
    path_params: StorageObjectsComposePathParams = field()
    query_params: StorageObjectsComposeQueryParams = field()
    security: StorageObjectsComposeSecurity = field()
    request: Optional[shared.ComposeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageObjectsComposeResponse:
    content_type: str = field()
    status_code: int = field()
    object: Optional[shared.Object] = field(default=None)
    
