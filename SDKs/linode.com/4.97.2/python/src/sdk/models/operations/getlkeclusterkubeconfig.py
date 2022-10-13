from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeClusterKubeconfigPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterKubeconfigSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeClusterKubeconfigSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeClusterKubeconfigSecurity:
    option1: Optional[GetLkeClusterKubeconfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeClusterKubeconfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeClusterKubeconfigRequest:
    path_params: GetLkeClusterKubeconfigPathParams = field(default=None)
    security: GetLkeClusterKubeconfigSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLkeClusterKubeconfig200ApplicationJSON:
    kubeconfig: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubeconfig' }})
    

@dataclass_json
@dataclass
class GetLkeClusterKubeconfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeClusterKubeconfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_lke_cluster_kubeconfig_200_application_json_object: Optional[GetLkeClusterKubeconfig200ApplicationJSON] = field(default=None)
    get_lke_cluster_kubeconfig_default_application_json_object: Optional[GetLkeClusterKubeconfigDefaultApplicationJSON] = field(default=None)
    
