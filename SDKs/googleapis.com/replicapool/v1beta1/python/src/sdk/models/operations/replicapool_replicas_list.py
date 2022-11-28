from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReplicapoolReplicasListPathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    zone: str = field(metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplicapoolReplicasListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class ReplicapoolReplicasListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolReplicasListSecurity:
    option1: Optional[ReplicapoolReplicasListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ReplicapoolReplicasListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ReplicapoolReplicasListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[ReplicapoolReplicasListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[ReplicapoolReplicasListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[ReplicapoolReplicasListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ReplicapoolReplicasListRequest:
    path_params: ReplicapoolReplicasListPathParams = field()
    query_params: ReplicapoolReplicasListQueryParams = field()
    security: ReplicapoolReplicasListSecurity = field()
    

@dataclass
class ReplicapoolReplicasListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
