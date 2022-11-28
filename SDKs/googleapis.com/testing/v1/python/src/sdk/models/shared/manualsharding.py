from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManualSharding:
    r"""ManualSharding
    Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
    """
    
    test_targets_for_shard: Optional[List[TestTargetsForShard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTargetsForShard') }})
    
