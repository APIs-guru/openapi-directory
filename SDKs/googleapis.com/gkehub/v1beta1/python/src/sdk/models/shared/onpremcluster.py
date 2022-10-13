from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OnPremClusterClusterTypeEnum(str, Enum):
    CLUSTERTYPE_UNSPECIFIED = "CLUSTERTYPE_UNSPECIFIED"
    BOOTSTRAP = "BOOTSTRAP"
    HYBRID = "HYBRID"
    STANDALONE = "STANDALONE"
    USER = "USER"


@dataclass_json
@dataclass
class OnPremCluster:
    admin_cluster: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminCluster' }})
    cluster_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterMissing' }})
    cluster_type: Optional[OnPremClusterClusterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterType' }})
    resource_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceLink' }})
    
