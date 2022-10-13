from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StaticCluster:
    cluster: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated' }})
    
