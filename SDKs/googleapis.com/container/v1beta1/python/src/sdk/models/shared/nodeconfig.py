from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acceleratorconfig
from . import advancedmachinefeatures
from . import confidentialnodes
from . import ephemeralstorageconfig
from . import gcfsconfig
from . import virtualnic
from . import nodekubeletconfig
from . import linuxnodeconfig
from . import nodepoolloggingconfig
from . import reservationaffinity
from . import sandboxconfig
from . import shieldedinstanceconfig
from . import nodetaint
from . import workloadmetadataconfig


@dataclass_json
@dataclass
class NodeConfig:
    accelerators: Optional[List[acceleratorconfig.AcceleratorConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accelerators' }})
    advanced_machine_features: Optional[advancedmachinefeatures.AdvancedMachineFeatures] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advancedMachineFeatures' }})
    boot_disk_kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootDiskKmsKey' }})
    confidential_nodes: Optional[confidentialnodes.ConfidentialNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidentialNodes' }})
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    ephemeral_storage_config: Optional[ephemeralstorageconfig.EphemeralStorageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ephemeralStorageConfig' }})
    gcfs_config: Optional[gcfsconfig.GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcfsConfig' }})
    gvnic: Optional[virtualnic.VirtualNic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gvnic' }})
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    kubelet_config: Optional[nodekubeletconfig.NodeKubeletConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubeletConfig' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    linux_node_config: Optional[linuxnodeconfig.LinuxNodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxNodeConfig' }})
    local_ssd_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localSsdCount' }})
    logging_config: Optional[nodepoolloggingconfig.NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minCpuPlatform' }})
    node_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeGroup' }})
    oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthScopes' }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preemptible' }})
    reservation_affinity: Optional[reservationaffinity.ReservationAffinity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationAffinity' }})
    sandbox_config: Optional[sandboxconfig.SandboxConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sandboxConfig' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    shielded_instance_config: Optional[shieldedinstanceconfig.ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shieldedInstanceConfig' }})
    spot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spot' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[List[nodetaint.NodeTaint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    workload_metadata_config: Optional[workloadmetadataconfig.WorkloadMetadataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadMetadataConfig' }})
    
