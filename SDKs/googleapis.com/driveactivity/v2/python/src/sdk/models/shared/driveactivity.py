from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DriveActivity:
    r"""DriveActivity
    A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
    """
    
    actions: Optional[List[Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    actors: Optional[List[Actor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actors') }})
    primary_action_detail: Optional[ActionDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryActionDetail') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    time_range: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
