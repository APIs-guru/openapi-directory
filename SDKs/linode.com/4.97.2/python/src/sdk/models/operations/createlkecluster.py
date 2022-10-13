from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateLkeClusterRequestBody:
    k8s_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'k8s_version' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    node_pools: List[shared.LkeNodePoolRequestBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_pools' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateLkeClusterSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateLkeClusterSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateLkeClusterSecurity:
    option1: Optional[CreateLkeClusterSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateLkeClusterSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateLkeClusterRequest:
    request: Optional[CreateLkeClusterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLkeClusterSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateLkeClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateLkeClusterResponse:
    content_type: str = field(default=None)
    lke_cluster: Optional[shared.LkeCluster] = field(default=None)
    status_code: int = field(default=None)
    create_lke_cluster_default_application_json_object: Optional[CreateLkeClusterDefaultApplicationJSON] = field(default=None)
    
