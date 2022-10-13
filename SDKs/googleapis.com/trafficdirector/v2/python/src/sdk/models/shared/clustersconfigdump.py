from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamiccluster
from . import dynamiccluster
from . import staticcluster


@dataclass_json
@dataclass
class ClustersConfigDump:
    dynamic_active_clusters: Optional[List[dynamiccluster.DynamicCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicActiveClusters' }})
    dynamic_warming_clusters: Optional[List[dynamiccluster.DynamicCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicWarmingClusters' }})
    static_clusters: Optional[List[staticcluster.StaticCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticClusters' }})
    version_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionInfo' }})
    
