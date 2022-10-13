from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudrunconfig
from . import configconnectorconfig
from . import dnscacheconfig
from . import gcepersistentdiskcsidriverconfig
from . import gcpfilestorecsidriverconfig
from . import gkebackupagentconfig
from . import horizontalpodautoscaling
from . import httploadbalancing
from . import istioconfig
from . import kalmconfig
from . import kubernetesdashboard
from . import networkpolicyconfig


@dataclass_json
@dataclass
class AddonsConfig:
    cloud_run_config: Optional[cloudrunconfig.CloudRunConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudRunConfig' }})
    config_connector_config: Optional[configconnectorconfig.ConfigConnectorConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configConnectorConfig' }})
    dns_cache_config: Optional[dnscacheconfig.DNSCacheConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsCacheConfig' }})
    gce_persistent_disk_csi_driver_config: Optional[gcepersistentdiskcsidriverconfig.GcePersistentDiskCsiDriverConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcePersistentDiskCsiDriverConfig' }})
    gcp_filestore_csi_driver_config: Optional[gcpfilestorecsidriverconfig.GcpFilestoreCsiDriverConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpFilestoreCsiDriverConfig' }})
    gke_backup_agent_config: Optional[gkebackupagentconfig.GkeBackupAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeBackupAgentConfig' }})
    horizontal_pod_autoscaling: Optional[horizontalpodautoscaling.HorizontalPodAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalPodAutoscaling' }})
    http_load_balancing: Optional[httploadbalancing.HTTPLoadBalancing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpLoadBalancing' }})
    istio_config: Optional[istioconfig.IstioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'istioConfig' }})
    kalm_config: Optional[kalmconfig.KalmConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kalmConfig' }})
    kubernetes_dashboard: Optional[kubernetesdashboard.KubernetesDashboard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesDashboard' }})
    network_policy_config: Optional[networkpolicyconfig.NetworkPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkPolicyConfig' }})
    
