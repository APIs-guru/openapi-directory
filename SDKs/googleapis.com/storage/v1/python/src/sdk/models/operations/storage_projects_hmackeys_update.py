from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageProjectsHmacKeysUpdatePathParams:
    access_id: str = field(metadata={'path_param': { 'field_name': 'accessId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageProjectsHmacKeysUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageProjectsHmacKeysUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysUpdateSecurity:
    option1: Optional[StorageProjectsHmacKeysUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageProjectsHmacKeysUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageProjectsHmacKeysUpdateRequest:
    path_params: StorageProjectsHmacKeysUpdatePathParams = field()
    query_params: StorageProjectsHmacKeysUpdateQueryParams = field()
    security: StorageProjectsHmacKeysUpdateSecurity = field()
    request: Optional[shared.HmacKeyMetadata] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageProjectsHmacKeysUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    hmac_key_metadata: Optional[shared.HmacKeyMetadata] = field(default=None)
    
