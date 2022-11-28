from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LiveBroadcastStatistics:
    r"""LiveBroadcastStatistics
    Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
    """
    
    concurrent_viewers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentViewers') }})
    total_chat_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalChatCount') }})
    
