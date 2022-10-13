from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_CLUSTERS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageClustersRequest:
    server_url: Optional[str] = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageClusters200ApplicationJSON:
    data: Optional[List[shared.ObjectStorageCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetObjectStorageClustersDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageClustersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_clusters_200_application_json_object: Optional[GetObjectStorageClusters200ApplicationJSON] = field(default=None)
    get_object_storage_clusters_default_application_json_object: Optional[GetObjectStorageClustersDefaultApplicationJSON] = field(default=None)
    
