from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetentionConfig:
    r"""RetentionConfig
    The settings for a topic's message retention.
    """
    
    per_partition_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perPartitionBytes') }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    
