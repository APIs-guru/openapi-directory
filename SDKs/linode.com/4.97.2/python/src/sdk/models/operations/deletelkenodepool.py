from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteLkeNodePoolPathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    pool_id: int = field(metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLkeNodePoolSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteLkeNodePoolDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteLkeNodePoolRequest:
    path_params: DeleteLkeNodePoolPathParams = field()
    security: DeleteLkeNodePoolSecurity = field()
    

@dataclass
class DeleteLkeNodePoolResponse:
    content_type: str = field()
    status_code: int = field()
    delete_lke_node_pool_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_lke_node_pool_default_application_json_object: Optional[DeleteLkeNodePoolDefaultApplicationJSON] = field(default=None)
    
