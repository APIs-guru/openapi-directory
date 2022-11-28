from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UniformSharding:
    r"""UniformSharding
    Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to \"-e numShard\" and \"-e shardIndex\" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.
    """
    
    num_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numShards') }})
    
