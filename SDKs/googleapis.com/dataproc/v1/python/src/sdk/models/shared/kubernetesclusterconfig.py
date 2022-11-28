from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KubernetesClusterConfig:
    r"""KubernetesClusterConfig
    The configuration for running the Dataproc cluster on Kubernetes.
    """
    
    gke_cluster_config: Optional[GkeClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterConfig') }})
    kubernetes_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesNamespace') }})
    kubernetes_software_config: Optional[KubernetesSoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesSoftwareConfig') }})
    
