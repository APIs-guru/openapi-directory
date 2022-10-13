from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import managedzoneprivatevisibilityconfiggkecluster
from . import managedzoneprivatevisibilityconfignetwork


@dataclass_json
@dataclass
class ManagedZonePrivateVisibilityConfig:
    gke_clusters: Optional[List[managedzoneprivatevisibilityconfiggkecluster.ManagedZonePrivateVisibilityConfigGkeCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClusters' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    networks: Optional[List[managedzoneprivatevisibilityconfignetwork.ManagedZonePrivateVisibilityConfigNetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    
