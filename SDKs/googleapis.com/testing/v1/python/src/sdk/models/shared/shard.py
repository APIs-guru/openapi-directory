from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Shard:
    r"""Shard
    Output only. Details about the shard.
    """
    
    num_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numShards') }})
    shard_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardIndex') }})
    test_targets_for_shard: Optional[TestTargetsForShard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTargetsForShard') }})
    
