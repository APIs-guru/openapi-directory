from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import mergedresult


@dataclass_json
@dataclass
class ShardSummary:
    runs: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runs' }})
    shard_result: Optional[mergedresult.MergedResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardResult' }})
    
