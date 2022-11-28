from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartitionConfig:
    r"""PartitionConfig
    The settings for a topic's partitions.
    """
    
    capacity: Optional[Capacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    
