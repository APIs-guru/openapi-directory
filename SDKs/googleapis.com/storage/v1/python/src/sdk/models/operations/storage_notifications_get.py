from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageNotificationsGetPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    notification: str = field(metadata={'path_param': { 'field_name': 'notification', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageNotificationsGetQueryParams:
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
class StorageNotificationsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageNotificationsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageNotificationsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageNotificationsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageNotificationsGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageNotificationsGetSecurity:
    option1: Optional[StorageNotificationsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageNotificationsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageNotificationsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[StorageNotificationsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[StorageNotificationsGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageNotificationsGetRequest:
    path_params: StorageNotificationsGetPathParams = field()
    query_params: StorageNotificationsGetQueryParams = field()
    security: StorageNotificationsGetSecurity = field()
    

@dataclass
class StorageNotificationsGetResponse:
    content_type: str = field()
    status_code: int = field()
    notification: Optional[shared.Notification] = field(default=None)
    
