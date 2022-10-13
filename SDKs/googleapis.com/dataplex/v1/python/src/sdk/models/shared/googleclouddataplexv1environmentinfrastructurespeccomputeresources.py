from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources:
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    max_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNodeCount' }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCount' }})
    
