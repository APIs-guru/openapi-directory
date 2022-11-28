from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShardSummary:
    r"""ShardSummary
    Result summary for a shard in an environment.
    """
    
    runs: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    shard_result: Optional[MergedResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardResult') }})
    
