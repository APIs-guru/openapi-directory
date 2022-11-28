from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageDefaultObjectAccessControlsGetPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    entity: str = field(metadata={'path_param': { 'field_name': 'entity', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageDefaultObjectAccessControlsGetQueryParams:
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
class StorageDefaultObjectAccessControlsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageDefaultObjectAccessControlsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageDefaultObjectAccessControlsGetSecurity:
    option1: Optional[StorageDefaultObjectAccessControlsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageDefaultObjectAccessControlsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageDefaultObjectAccessControlsGetRequest:
    path_params: StorageDefaultObjectAccessControlsGetPathParams = field()
    query_params: StorageDefaultObjectAccessControlsGetQueryParams = field()
    security: StorageDefaultObjectAccessControlsGetSecurity = field()
    

@dataclass
class StorageDefaultObjectAccessControlsGetResponse:
    content_type: str = field()
    status_code: int = field()
    object_access_control: Optional[shared.ObjectAccessControl] = field(default=None)
    
