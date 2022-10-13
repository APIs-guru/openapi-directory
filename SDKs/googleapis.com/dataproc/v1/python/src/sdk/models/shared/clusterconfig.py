from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalingconfig
from . import dataprocmetricconfig
from . import encryptionconfig
from . import endpointconfig
from . import gceclusterconfig
from . import gkeclusterconfig
from . import nodeinitializationaction
from . import lifecycleconfig
from . import instancegroupconfig
from . import metastoreconfig
from . import instancegroupconfig
from . import securityconfig
from . import softwareconfig
from . import instancegroupconfig


@dataclass_json
@dataclass
class ClusterConfig:
    autoscaling_config: Optional[autoscalingconfig.AutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscalingConfig' }})
    config_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configBucket' }})
    dataproc_metric_config: Optional[dataprocmetricconfig.DataprocMetricConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataprocMetricConfig' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    endpoint_config: Optional[endpointconfig.EndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointConfig' }})
    gce_cluster_config: Optional[gceclusterconfig.GceClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gceClusterConfig' }})
    gke_cluster_config: Optional[gkeclusterconfig.GkeClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClusterConfig' }})
    initialization_actions: Optional[List[nodeinitializationaction.NodeInitializationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializationActions' }})
    lifecycle_config: Optional[lifecycleconfig.LifecycleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleConfig' }})
    master_config: Optional[instancegroupconfig.InstanceGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterConfig' }})
    metastore_config: Optional[metastoreconfig.MetastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metastoreConfig' }})
    secondary_worker_config: Optional[instancegroupconfig.InstanceGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryWorkerConfig' }})
    security_config: Optional[securityconfig.SecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityConfig' }})
    software_config: Optional[softwareconfig.SoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareConfig' }})
    temp_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempBucket' }})
    worker_config: Optional[instancegroupconfig.InstanceGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfig' }})
    
