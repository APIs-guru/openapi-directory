from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComputeMessageStatsResponse:
    r"""ComputeMessageStatsResponse
    Response containing stats for messages in the requested topic and partition.
    """
    
    message_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageBytes') }})
    message_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageCount') }})
    minimum_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumEventTime') }})
    minimum_publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPublishTime') }})
    
