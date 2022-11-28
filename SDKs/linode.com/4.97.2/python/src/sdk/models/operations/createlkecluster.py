from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateLkeClusterRequestBody:
    k8s_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('k8s_version') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    node_pools: List[shared.LkeNodePoolRequestBody] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_pools') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateLkeClusterSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateLkeClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateLkeClusterRequest:
    security: CreateLkeClusterSecurity = field()
    request: Optional[CreateLkeClusterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateLkeClusterResponse:
    content_type: str = field()
    status_code: int = field()
    lke_cluster: Optional[shared.LkeCluster] = field(default=None)
    create_lke_cluster_default_application_json_object: Optional[CreateLkeClusterDefaultApplicationJSON] = field(default=None)
    
