from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StorageBucketsLockRetentionPolicyPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageBucketsLockRetentionPolicyQueryParams:
    if_metageneration_match: str = field(metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
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
class StorageBucketsLockRetentionPolicySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsLockRetentionPolicySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsLockRetentionPolicySecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StorageBucketsLockRetentionPolicySecurity:
    option1: Optional[StorageBucketsLockRetentionPolicySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketsLockRetentionPolicySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageBucketsLockRetentionPolicySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class StorageBucketsLockRetentionPolicyRequest:
    path_params: StorageBucketsLockRetentionPolicyPathParams = field()
    query_params: StorageBucketsLockRetentionPolicyQueryParams = field()
    security: StorageBucketsLockRetentionPolicySecurity = field()
    

@dataclass
class StorageBucketsLockRetentionPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    bucket: Optional[shared.Bucket] = field(default=None)
    
