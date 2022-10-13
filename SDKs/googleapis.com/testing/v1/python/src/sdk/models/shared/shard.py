from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testtargetsforshard


@dataclass_json
@dataclass
class Shard:
    num_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numShards' }})
    shard_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardIndex' }})
    test_targets_for_shard: Optional[testtargetsforshard.TestTargetsForShard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTargetsForShard' }})
    
