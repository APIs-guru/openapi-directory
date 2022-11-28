from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterConfig:
    r"""ClusterConfig
    The cluster config.
    """
    
    autoscaling_config: Optional[AutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingConfig') }})
    config_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configBucket') }})
    dataproc_metric_config: Optional[DataprocMetricConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataprocMetricConfig') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    endpoint_config: Optional[EndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfig') }})
    gce_cluster_config: Optional[GceClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gceClusterConfig') }})
    gke_cluster_config: Optional[GkeClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterConfig') }})
    initialization_actions: Optional[List[NodeInitializationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationActions') }})
    lifecycle_config: Optional[LifecycleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleConfig') }})
    master_config: Optional[InstanceGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterConfig') }})
    metastore_config: Optional[MetastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreConfig') }})
    secondary_worker_config: Optional[InstanceGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryWorkerConfig') }})
    security_config: Optional[SecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityConfig') }})
    software_config: Optional[SoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    temp_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempBucket') }})
    worker_config: Optional[InstanceGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    

@dataclass_json
@dataclass
class ClusterConfigInput:
    r"""ClusterConfigInput
    The cluster config.
    """
    
    autoscaling_config: Optional[AutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingConfig') }})
    config_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configBucket') }})
    dataproc_metric_config: Optional[DataprocMetricConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataprocMetricConfig') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    endpoint_config: Optional[EndpointConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfig') }})
    gce_cluster_config: Optional[GceClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gceClusterConfig') }})
    gke_cluster_config: Optional[GkeClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterConfig') }})
    initialization_actions: Optional[List[NodeInitializationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationActions') }})
    lifecycle_config: Optional[LifecycleConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleConfig') }})
    master_config: Optional[InstanceGroupConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterConfig') }})
    metastore_config: Optional[MetastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreConfig') }})
    secondary_worker_config: Optional[InstanceGroupConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryWorkerConfig') }})
    security_config: Optional[SecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityConfig') }})
    software_config: Optional[SoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    temp_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempBucket') }})
    worker_config: Optional[InstanceGroupConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    
