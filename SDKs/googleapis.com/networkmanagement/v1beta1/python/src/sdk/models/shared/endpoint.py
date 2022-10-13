from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudfunctionendpoint

class EndpointNetworkTypeEnum(str, Enum):
    NETWORK_TYPE_UNSPECIFIED = "NETWORK_TYPE_UNSPECIFIED"
    GCP_NETWORK = "GCP_NETWORK"
    NON_GCP_NETWORK = "NON_GCP_NETWORK"


@dataclass_json
@dataclass
class Endpoint:
    cloud_function: Optional[cloudfunctionendpoint.CloudFunctionEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudFunction' }})
    cloud_sql_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSqlInstance' }})
    gke_master_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeMasterCluster' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_type: Optional[EndpointNetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkType' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    
