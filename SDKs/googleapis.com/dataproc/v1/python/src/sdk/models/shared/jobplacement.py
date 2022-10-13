from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobPlacement:
    cluster_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterLabels' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterUuid' }})
    
