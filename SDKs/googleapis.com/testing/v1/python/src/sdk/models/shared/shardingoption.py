from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShardingOption:
    r"""ShardingOption
    Options for enabling sharding.
    """
    
    manual_sharding: Optional[ManualSharding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualSharding') }})
    uniform_sharding: Optional[UniformSharding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniformSharding') }})
    
