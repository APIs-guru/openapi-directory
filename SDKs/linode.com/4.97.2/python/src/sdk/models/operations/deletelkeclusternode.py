from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteLkeClusterNodePathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLkeClusterNodeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLkeClusterNodeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteLkeClusterNodeSecurity:
    option1: Optional[DeleteLkeClusterNodeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteLkeClusterNodeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteLkeClusterNodeRequest:
    path_params: DeleteLkeClusterNodePathParams = field(default=None)
    security: DeleteLkeClusterNodeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteLkeClusterNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteLkeClusterNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_lke_cluster_node_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_lke_cluster_node_default_application_json_object: Optional[DeleteLkeClusterNodeDefaultApplicationJSON] = field(default=None)
    
