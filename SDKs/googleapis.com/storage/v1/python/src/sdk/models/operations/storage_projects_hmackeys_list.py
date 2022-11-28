from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageProjectsHmacKeysListPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageProjectsHmacKeysListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    service_account_email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceAccountEmail', 'style': 'form', 'explode': True }})
    show_deleted_keys: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showDeletedKeys', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageProjectsHmacKeysListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageProjectsHmacKeysListSecurity:
    option1: Optional[StorageProjectsHmacKeysListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageProjectsHmacKeysListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageProjectsHmacKeysListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[StorageProjectsHmacKeysListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageProjectsHmacKeysListRequest:
    path_params: StorageProjectsHmacKeysListPathParams = field()
    query_params: StorageProjectsHmacKeysListQueryParams = field()
    security: StorageProjectsHmacKeysListSecurity = field()
    

@dataclass
class StorageProjectsHmacKeysListResponse:
    content_type: str = field()
    status_code: int = field()
    hmac_keys_metadata: Optional[shared.HmacKeysMetadata] = field(default=None)
    
