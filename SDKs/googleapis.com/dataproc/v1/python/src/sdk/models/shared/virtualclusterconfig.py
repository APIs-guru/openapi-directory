from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualClusterConfig:
    r"""VirtualClusterConfig
    The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke).
    """
    
    auxiliary_services_config: Optional[AuxiliaryServicesConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryServicesConfig') }})
    kubernetes_cluster_config: Optional[KubernetesClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesClusterConfig') }})
    staging_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingBucket') }})
    
