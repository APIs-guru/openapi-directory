from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageBucketsSetIamPolicyPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageBucketsSetIamPolicyQueryParams:
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
class StorageBucketsSetIamPolicySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsSetIamPolicySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsSetIamPolicySecurity:
    option1: Optional[StorageBucketsSetIamPolicySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketsSetIamPolicySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageBucketsSetIamPolicyRequest:
    path_params: StorageBucketsSetIamPolicyPathParams = field()
    query_params: StorageBucketsSetIamPolicyQueryParams = field()
    security: StorageBucketsSetIamPolicySecurity = field()
    request: Optional[shared.Policy] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageBucketsSetIamPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    policy: Optional[shared.Policy] = field(default=None)
    
