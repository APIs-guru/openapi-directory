from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayerEvent:
    r"""PlayerEvent
    An event status resource.
    """
    
    definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitionId') }})
    formatted_num_events: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedNumEvents') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    num_events: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numEvents') }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    
