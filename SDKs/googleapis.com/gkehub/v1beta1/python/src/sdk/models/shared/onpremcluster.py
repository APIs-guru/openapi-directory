from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OnPremClusterClusterTypeEnum(str, Enum):
    CLUSTERTYPE_UNSPECIFIED = "CLUSTERTYPE_UNSPECIFIED"
    BOOTSTRAP = "BOOTSTRAP"
    HYBRID = "HYBRID"
    STANDALONE = "STANDALONE"
    USER = "USER"


@dataclass_json
@dataclass
class OnPremCluster:
    r"""OnPremCluster
    OnPremCluster contains information specific to GKE On-Prem clusters.
    """
    
    admin_cluster: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminCluster') }})
    cluster_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterMissing') }})
    cluster_type: Optional[OnPremClusterClusterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterType') }})
    resource_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLink') }})
    

@dataclass_json
@dataclass
class OnPremClusterInput:
    r"""OnPremClusterInput
    OnPremCluster contains information specific to GKE On-Prem clusters.
    """
    
    admin_cluster: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminCluster') }})
    cluster_type: Optional[OnPremClusterClusterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterType') }})
    resource_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLink') }})
    
