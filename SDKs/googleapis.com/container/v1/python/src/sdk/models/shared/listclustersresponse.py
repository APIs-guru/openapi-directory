from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cluster


@dataclass_json
@dataclass
class ListClustersResponse:
    clusters: Optional[List[cluster.Cluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    missing_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingZones' }})
    
