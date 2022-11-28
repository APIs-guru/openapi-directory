from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteLkeClusterNodePathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLkeClusterNodeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteLkeClusterNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteLkeClusterNodeRequest:
    path_params: DeleteLkeClusterNodePathParams = field()
    security: DeleteLkeClusterNodeSecurity = field()
    

@dataclass
class DeleteLkeClusterNodeResponse:
    content_type: str = field()
    status_code: int = field()
    delete_lke_cluster_node_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_lke_cluster_node_default_application_json_object: Optional[DeleteLkeClusterNodeDefaultApplicationJSON] = field(default=None)
    
