from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayRequestDto:
    playing_item_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayingItemPosition' }})
    playing_queue: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayingQueue' }})
    start_position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPositionTicks' }})
    
