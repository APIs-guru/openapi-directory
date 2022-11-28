from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeConfig:
    r"""NodeConfig
    Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
    """
    
    accelerators: Optional[List[AcceleratorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    advanced_machine_features: Optional[AdvancedMachineFeatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedMachineFeatures') }})
    boot_disk_kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskKmsKey') }})
    confidential_nodes: Optional[ConfidentialNodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialNodes') }})
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeGb') }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    ephemeral_storage_config: Optional[EphemeralStorageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorageConfig') }})
    fast_socket: Optional[FastSocket] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fastSocket') }})
    gcfs_config: Optional[GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcfsConfig') }})
    gvnic: Optional[VirtualNic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gvnic') }})
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageType') }})
    kubelet_config: Optional[NodeKubeletConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubeletConfig') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_node_config: Optional[LinuxNodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxNodeConfig') }})
    local_ssd_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localSsdCount') }})
    logging_config: Optional[NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    node_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeGroup') }})
    oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthScopes') }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    reservation_affinity: Optional[ReservationAffinity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationAffinity') }})
    resource_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLabels') }})
    sandbox_config: Optional[SandboxConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sandboxConfig') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    spot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spot') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    taints: Optional[List[NodeTaint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    workload_metadata_config: Optional[WorkloadMetadataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadMetadataConfig') }})
    
