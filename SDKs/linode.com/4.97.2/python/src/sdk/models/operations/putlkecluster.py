from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutLkeClusterPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutLkeClusterSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutLkeClusterSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutLkeClusterSecurity:
    option1: Optional[PutLkeClusterSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutLkeClusterSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutLkeClusterRequest:
    path_params: PutLkeClusterPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutLkeClusterSecurity = field(default=None)
    

@dataclass
class PutLkeClusterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    put_lke_cluster_200_application_json_any: Optional[Any] = field(default=None)
    
