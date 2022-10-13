from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testtargetsforshard


@dataclass_json
@dataclass
class ManualSharding:
    test_targets_for_shard: Optional[List[testtargetsforshard.TestTargetsForShard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTargetsForShard' }})
    
