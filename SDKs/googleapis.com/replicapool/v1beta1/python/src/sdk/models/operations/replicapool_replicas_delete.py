from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReplicapoolReplicasDeletePathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    replica_name: str = field(metadata={'path_param': { 'field_name': 'replicaName', 'style': 'simple', 'explode': False }})
    zone: str = field(metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplicapoolReplicasDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class ReplicapoolReplicasDeleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasDeleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasDeleteSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasDeleteSecurity:
    option1: Optional[ReplicapoolReplicasDeleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ReplicapoolReplicasDeleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ReplicapoolReplicasDeleteSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ReplicapoolReplicasDeleteRequest:
    path_params: ReplicapoolReplicasDeletePathParams = field()
    query_params: ReplicapoolReplicasDeleteQueryParams = field()
    security: ReplicapoolReplicasDeleteSecurity = field()
    request: Optional[shared.ReplicasDeleteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplicapoolReplicasDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
