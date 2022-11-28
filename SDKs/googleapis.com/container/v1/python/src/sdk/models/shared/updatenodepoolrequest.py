from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateNodePoolRequest:
    r"""UpdateNodePoolRequest
    UpdateNodePoolRequests update a node pool's image and/or version.
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    confidential_nodes: Optional[ConfidentialNodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialNodes') }})
    fast_socket: Optional[FastSocket] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fastSocket') }})
    gcfs_config: Optional[GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcfsConfig') }})
    gvnic: Optional[VirtualNic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gvnic') }})
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageType') }})
    kubelet_config: Optional[NodeKubeletConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubeletConfig') }})
    labels: Optional[NodeLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_node_config: Optional[LinuxNodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxNodeConfig') }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    logging_config: Optional[NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_network_config: Optional[NodeNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeNetworkConfig') }})
    node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolId') }})
    node_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeVersion') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    resource_labels: Optional[ResourceLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLabels') }})
    tags: Optional[NetworkTags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    taints: Optional[NodeTaints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    upgrade_settings: Optional[UpgradeSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeSettings') }})
    workload_metadata_config: Optional[WorkloadMetadataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadMetadataConfig') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
