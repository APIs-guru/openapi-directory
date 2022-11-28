from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MultiCloudCluster:
    r"""MultiCloudCluster
    MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
    """
    
    cluster_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterMissing') }})
    resource_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLink') }})
    

@dataclass_json
@dataclass
class MultiCloudClusterInput:
    r"""MultiCloudClusterInput
    MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
    """
    
    resource_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLink') }})
    
