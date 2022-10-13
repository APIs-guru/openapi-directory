from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClusterConfigurationClustering:
    max_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_quantity' }})
    min_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_quantity' }})
    num_clusters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_clusters' }})
    
