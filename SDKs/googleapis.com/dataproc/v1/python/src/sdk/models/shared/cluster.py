from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clusterconfig
from . import clustermetrics
from . import clusterstatus
from . import clusterstatus
from . import virtualclusterconfig


@dataclass_json
@dataclass
class Cluster:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterUuid' }})
    config: Optional[clusterconfig.ClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    metrics: Optional[clustermetrics.ClusterMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    status: Optional[clusterstatus.ClusterStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_history: Optional[List[clusterstatus.ClusterStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusHistory' }})
    virtual_cluster_config: Optional[virtualclusterconfig.VirtualClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualClusterConfig' }})
    
