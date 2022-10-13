from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteLkeNodePoolPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    pool_id: int = field(default=None, metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLkeNodePoolSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLkeNodePoolSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteLkeNodePoolSecurity:
    option1: Optional[DeleteLkeNodePoolSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteLkeNodePoolSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteLkeNodePoolRequest:
    path_params: DeleteLkeNodePoolPathParams = field(default=None)
    security: DeleteLkeNodePoolSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteLkeNodePoolDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteLkeNodePoolResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_lke_node_pool_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_lke_node_pool_default_application_json_object: Optional[DeleteLkeNodePoolDefaultApplicationJSON] = field(default=None)
    
