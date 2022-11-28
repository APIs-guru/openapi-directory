from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayRequestDto:
    r"""PlayRequestDto
    Class PlayRequestDto.
    """
    
    playing_item_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayingItemPosition') }})
    playing_queue: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayingQueue') }})
    start_position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPositionTicks') }})
    
