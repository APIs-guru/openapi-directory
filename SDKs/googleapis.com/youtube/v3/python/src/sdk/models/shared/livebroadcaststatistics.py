from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveBroadcastStatistics:
    concurrent_viewers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentViewers' }})
    total_chat_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalChatCount' }})
    
