from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class StorageDefaultObjectAccessControlsPatchPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    entity: str = field(default=None, metadata={'path_param': { 'field_name': 'entity', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageDefaultObjectAccessControlsPatchQueryParams:
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
class StorageDefaultObjectAccessControlsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageDefaultObjectAccessControlsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageDefaultObjectAccessControlsPatchSecurity:
    option1: Optional[StorageDefaultObjectAccessControlsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageDefaultObjectAccessControlsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageDefaultObjectAccessControlsPatchRequest:
    path_params: StorageDefaultObjectAccessControlsPatchPathParams = field(default=None)
    query_params: StorageDefaultObjectAccessControlsPatchQueryParams = field(default=None)
    request: Optional[shared.ObjectAccessControl] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StorageDefaultObjectAccessControlsPatchSecurity = field(default=None)
    

@dataclass
class StorageDefaultObjectAccessControlsPatchResponse:
    content_type: str = field(default=None)
    object_access_control: Optional[shared.ObjectAccessControl] = field(default=None)
    status_code: int = field(default=None)
    
