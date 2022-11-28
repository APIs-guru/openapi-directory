from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageProjectsHmacKeysCreatePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageProjectsHmacKeysCreateQueryParams:
    service_account_email: str = field(metadata={'query_param': { 'field_name': 'serviceAccountEmail', 'style': 'form', 'explode': True }})
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
class StorageProjectsHmacKeysCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysCreateSecurity:
    option1: Optional[StorageProjectsHmacKeysCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageProjectsHmacKeysCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageProjectsHmacKeysCreateRequest:
    path_params: StorageProjectsHmacKeysCreatePathParams = field()
    query_params: StorageProjectsHmacKeysCreateQueryParams = field()
    security: StorageProjectsHmacKeysCreateSecurity = field()
    

@dataclass
class StorageProjectsHmacKeysCreateResponse:
    content_type: str = field()
    status_code: int = field()
    hmac_key: Optional[shared.HmacKey] = field(default=None)
    
