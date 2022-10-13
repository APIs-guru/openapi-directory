from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SingleClusterRouting:
    allow_transactional_writes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowTransactionalWrites' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    
