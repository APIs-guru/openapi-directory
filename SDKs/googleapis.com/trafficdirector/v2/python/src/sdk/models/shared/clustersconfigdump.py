from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClustersConfigDump:
    r"""ClustersConfigDump
    Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
    """
    
    dynamic_active_clusters: Optional[List[DynamicCluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicActiveClusters') }})
    dynamic_warming_clusters: Optional[List[DynamicCluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicWarmingClusters') }})
    static_clusters: Optional[List[StaticCluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticClusters') }})
    version_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionInfo') }})
    
