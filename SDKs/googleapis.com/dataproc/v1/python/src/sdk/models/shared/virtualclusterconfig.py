from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import auxiliaryservicesconfig
from . import kubernetesclusterconfig


@dataclass_json
@dataclass
class VirtualClusterConfig:
    auxiliary_services_config: Optional[auxiliaryservicesconfig.AuxiliaryServicesConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auxiliaryServicesConfig' }})
    kubernetes_cluster_config: Optional[kubernetesclusterconfig.KubernetesClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesClusterConfig' }})
    staging_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingBucket' }})
    
