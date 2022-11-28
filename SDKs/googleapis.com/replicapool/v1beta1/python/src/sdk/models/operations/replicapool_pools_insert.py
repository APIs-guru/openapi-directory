from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReplicapoolPoolsInsertPathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    zone: str = field(metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplicapoolPoolsInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class ReplicapoolPoolsInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolPoolsInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolPoolsInsertSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolPoolsInsertSecurity:
    option1: Optional[ReplicapoolPoolsInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ReplicapoolPoolsInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ReplicapoolPoolsInsertSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ReplicapoolPoolsInsertRequest:
    path_params: ReplicapoolPoolsInsertPathParams = field()
    query_params: ReplicapoolPoolsInsertQueryParams = field()
    security: ReplicapoolPoolsInsertSecurity = field()
    request: Optional[shared.Pool] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplicapoolPoolsInsertResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
