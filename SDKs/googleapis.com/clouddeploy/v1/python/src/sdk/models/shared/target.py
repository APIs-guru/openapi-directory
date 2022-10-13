from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import anthoscluster
from . import executionconfig
from . import gkecluster
from . import cloudrunlocation


@dataclass_json
@dataclass
class Target:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    anthos_cluster: Optional[anthoscluster.AnthosCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosCluster' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    execution_configs: Optional[List[executionconfig.ExecutionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionConfigs' }})
    gke: Optional[gkecluster.GkeCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gke' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    require_approval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireApproval' }})
    run: Optional[cloudrunlocation.CloudRunLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
