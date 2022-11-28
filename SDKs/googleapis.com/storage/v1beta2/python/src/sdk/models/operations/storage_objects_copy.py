from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageObjectsCopyPathParams:
    destination_bucket: str = field(metadata={'path_param': { 'field_name': 'destinationBucket', 'style': 'simple', 'explode': False }})
    destination_object: str = field(metadata={'path_param': { 'field_name': 'destinationObject', 'style': 'simple', 'explode': False }})
    source_bucket: str = field(metadata={'path_param': { 'field_name': 'sourceBucket', 'style': 'simple', 'explode': False }})
    source_object: str = field(metadata={'path_param': { 'field_name': 'sourceObject', 'style': 'simple', 'explode': False }})
    
class StorageObjectsCopyProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclass
class StorageObjectsCopyQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
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
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsCopyProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source_generation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceGeneration', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageObjectsCopySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsCopySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsCopySecurity:
    option1: Optional[StorageObjectsCopySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsCopySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageObjectsCopyRequest:
    path_params: StorageObjectsCopyPathParams = field()
    query_params: StorageObjectsCopyQueryParams = field()
    security: StorageObjectsCopySecurity = field()
    request: Optional[shared.Object] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageObjectsCopyResponse:
    content_type: str = field()
    status_code: int = field()
    object: Optional[shared.Object] = field(default=None)
    
