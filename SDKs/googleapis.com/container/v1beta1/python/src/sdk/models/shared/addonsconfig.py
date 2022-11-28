from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddonsConfig:
    r"""AddonsConfig
    Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
    """
    
    cloud_run_config: Optional[CloudRunConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRunConfig') }})
    config_connector_config: Optional[ConfigConnectorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configConnectorConfig') }})
    dns_cache_config: Optional[DNSCacheConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsCacheConfig') }})
    gce_persistent_disk_csi_driver_config: Optional[GcePersistentDiskCsiDriverConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcePersistentDiskCsiDriverConfig') }})
    gcp_filestore_csi_driver_config: Optional[GcpFilestoreCsiDriverConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpFilestoreCsiDriverConfig') }})
    gke_backup_agent_config: Optional[GkeBackupAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeBackupAgentConfig') }})
    horizontal_pod_autoscaling: Optional[HorizontalPodAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalPodAutoscaling') }})
    http_load_balancing: Optional[HTTPLoadBalancing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpLoadBalancing') }})
    istio_config: Optional[IstioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istioConfig') }})
    kalm_config: Optional[KalmConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kalmConfig') }})
    kubernetes_dashboard: Optional[KubernetesDashboard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesDashboard') }})
    network_policy_config: Optional[NetworkPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkPolicyConfig') }})
    
