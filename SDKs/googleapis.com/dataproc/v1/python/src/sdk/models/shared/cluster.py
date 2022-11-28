from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterInput:
    r"""ClusterInput
    Describes the identifying information, config, and status of a Dataproc cluster
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    config: Optional[ClusterConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metrics: Optional[ClusterMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    virtual_cluster_config: Optional[VirtualClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualClusterConfig') }})
    

@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    Describes the identifying information, config, and status of a Dataproc cluster
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUuid') }})
    config: Optional[ClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metrics: Optional[ClusterMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    status: Optional[ClusterStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_history: Optional[List[ClusterStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusHistory') }})
    virtual_cluster_config: Optional[VirtualClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualClusterConfig') }})
    
