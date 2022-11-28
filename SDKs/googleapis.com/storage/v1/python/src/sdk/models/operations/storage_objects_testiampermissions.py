from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageObjectsTestIamPermissionsPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageObjectsTestIamPermissionsQueryParams:
    permissions: List[str] = field(metadata={'query_param': { 'field_name': 'permissions', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    generation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'generation', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageObjectsTestIamPermissionsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsTestIamPermissionsSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsTestIamPermissionsSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsTestIamPermissionsSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsTestIamPermissionsSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageObjectsTestIamPermissionsSecurity:
    option1: Optional[StorageObjectsTestIamPermissionsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsTestIamPermissionsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageObjectsTestIamPermissionsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[StorageObjectsTestIamPermissionsSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[StorageObjectsTestIamPermissionsSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageObjectsTestIamPermissionsRequest:
    path_params: StorageObjectsTestIamPermissionsPathParams = field()
    query_params: StorageObjectsTestIamPermissionsQueryParams = field()
    security: StorageObjectsTestIamPermissionsSecurity = field()
    

@dataclass
class StorageObjectsTestIamPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    test_iam_permissions_response: Optional[shared.TestIamPermissionsResponse] = field(default=None)
    
