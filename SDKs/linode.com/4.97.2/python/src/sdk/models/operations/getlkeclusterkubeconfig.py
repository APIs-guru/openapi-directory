from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLkeClusterKubeconfigPathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterKubeconfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLkeClusterKubeconfig200ApplicationJSON:
    kubeconfig: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubeconfig') }})
    

@dataclass_json
@dataclass
class GetLkeClusterKubeconfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLkeClusterKubeconfigRequest:
    path_params: GetLkeClusterKubeconfigPathParams = field()
    security: GetLkeClusterKubeconfigSecurity = field()
    

@dataclass
class GetLkeClusterKubeconfigResponse:
    content_type: str = field()
    status_code: int = field()
    get_lke_cluster_kubeconfig_200_application_json_object: Optional[GetLkeClusterKubeconfig200ApplicationJSON] = field(default=None)
    get_lke_cluster_kubeconfig_default_application_json_object: Optional[GetLkeClusterKubeconfigDefaultApplicationJSON] = field(default=None)
    
