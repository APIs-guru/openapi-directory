from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clusterconfigurationclustering
from . import clusterconfigurationrouting


@dataclass_json
@dataclass
class ClusterConfiguration:
    clustering: Optional[clusterconfigurationclustering.ClusterConfigurationClustering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clustering' }})
    response_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_type' }})
    routing: Optional[clusterconfigurationrouting.ClusterConfigurationRouting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing' }})
    
