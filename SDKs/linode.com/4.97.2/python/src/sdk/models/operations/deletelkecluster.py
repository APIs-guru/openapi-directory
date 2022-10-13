from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteLkeClusterPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLkeClusterSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLkeClusterSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteLkeClusterSecurity:
    option1: Optional[DeleteLkeClusterSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteLkeClusterSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteLkeClusterRequest:
    path_params: DeleteLkeClusterPathParams = field(default=None)
    security: DeleteLkeClusterSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteLkeClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteLkeClusterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_lke_cluster_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_lke_cluster_default_application_json_object: Optional[DeleteLkeClusterDefaultApplicationJSON] = field(default=None)
    
