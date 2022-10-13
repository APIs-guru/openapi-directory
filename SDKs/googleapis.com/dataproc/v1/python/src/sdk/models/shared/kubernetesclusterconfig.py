from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gkeclusterconfig
from . import kubernetessoftwareconfig


@dataclass_json
@dataclass
class KubernetesClusterConfig:
    gke_cluster_config: Optional[gkeclusterconfig.GkeClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClusterConfig' }})
    kubernetes_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesNamespace' }})
    kubernetes_software_config: Optional[kubernetessoftwareconfig.KubernetesSoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesSoftwareConfig' }})
    
