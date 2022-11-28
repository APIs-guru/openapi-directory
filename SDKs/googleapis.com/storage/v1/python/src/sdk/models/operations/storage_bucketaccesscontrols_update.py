from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageBucketAccessControlsUpdatePathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    entity: str = field(metadata={'path_param': { 'field_name': 'entity', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageBucketAccessControlsUpdateQueryParams:
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
class StorageBucketAccessControlsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketAccessControlsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketAccessControlsUpdateSecurity:
    option1: Optional[StorageBucketAccessControlsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketAccessControlsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageBucketAccessControlsUpdateRequest:
    path_params: StorageBucketAccessControlsUpdatePathParams = field()
    query_params: StorageBucketAccessControlsUpdateQueryParams = field()
    security: StorageBucketAccessControlsUpdateSecurity = field()
    request: Optional[shared.BucketAccessControl] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageBucketAccessControlsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    bucket_access_control: Optional[shared.BucketAccessControl] = field(default=None)
    
