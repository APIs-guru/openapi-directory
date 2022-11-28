from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedCluster:
    r"""ManagedCluster
    Cluster that is managed by the workflow.
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    config: Optional[ClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class ManagedClusterInput:
    r"""ManagedClusterInput
    Cluster that is managed by the workflow.
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    config: Optional[ClusterConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
