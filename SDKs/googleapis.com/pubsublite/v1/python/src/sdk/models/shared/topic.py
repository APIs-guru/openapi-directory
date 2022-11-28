from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Topic:
    r"""Topic
    Metadata about a topic resource.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partition_config: Optional[PartitionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionConfig') }})
    reservation_config: Optional[ReservationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationConfig') }})
    retention_config: Optional[RetentionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionConfig') }})
    
