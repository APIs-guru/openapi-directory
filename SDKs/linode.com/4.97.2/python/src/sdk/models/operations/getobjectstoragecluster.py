from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_CLUSTER_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageClusterPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageClusterRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetObjectStorageClusterPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageClusterResponse:
    content_type: str = field(default=None)
    object_storage_cluster: Optional[shared.ObjectStorageCluster] = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_cluster_default_application_json_object: Optional[GetObjectStorageClusterDefaultApplicationJSON] = field(default=None)
    
