from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageDefaultObjectAccessControlsUpdatePathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    entity: str = field(metadata={'path_param': { 'field_name': 'entity', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageDefaultObjectAccessControlsUpdateQueryParams:
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
class StorageDefaultObjectAccessControlsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageDefaultObjectAccessControlsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageDefaultObjectAccessControlsUpdateSecurity:
    option1: Optional[StorageDefaultObjectAccessControlsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageDefaultObjectAccessControlsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageDefaultObjectAccessControlsUpdateRequest:
    path_params: StorageDefaultObjectAccessControlsUpdatePathParams = field()
    query_params: StorageDefaultObjectAccessControlsUpdateQueryParams = field()
    security: StorageDefaultObjectAccessControlsUpdateSecurity = field()
    request: Optional[shared.ObjectAccessControl] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageDefaultObjectAccessControlsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    object_access_control: Optional[shared.ObjectAccessControl] = field(default=None)
    
