from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import confidentialnodes
from . import gcfsconfig
from . import virtualnic
from . import nodekubeletconfig
from . import nodelabels
from . import linuxnodeconfig
from . import nodepoolloggingconfig
from . import nodenetworkconfig
from . import networktags
from . import nodetaints
from . import upgradesettings
from . import workloadmetadataconfig


@dataclass_json
@dataclass
class UpdateNodePoolRequest:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    confidential_nodes: Optional[confidentialnodes.ConfidentialNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidentialNodes' }})
    gcfs_config: Optional[gcfsconfig.GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcfsConfig' }})
    gvnic: Optional[virtualnic.VirtualNic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gvnic' }})
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    kubelet_config: Optional[nodekubeletconfig.NodeKubeletConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubeletConfig' }})
    labels: Optional[nodelabels.NodeLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    linux_node_config: Optional[linuxnodeconfig.LinuxNodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxNodeConfig' }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    logging_config: Optional[nodepoolloggingconfig.NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_network_config: Optional[nodenetworkconfig.NodeNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeNetworkConfig' }})
    node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolId' }})
    node_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeVersion' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    tags: Optional[networktags.NetworkTags] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[nodetaints.NodeTaints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    upgrade_settings: Optional[upgradesettings.UpgradeSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeSettings' }})
    workload_metadata_config: Optional[workloadmetadataconfig.WorkloadMetadataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadMetadataConfig' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
