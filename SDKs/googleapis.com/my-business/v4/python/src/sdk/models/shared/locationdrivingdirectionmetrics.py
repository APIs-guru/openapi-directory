from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationDrivingDirectionMetrics:
    r"""LocationDrivingDirectionMetrics
    A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
    """
    
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    top_direction_sources: Optional[List[TopDirectionSources]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topDirectionSources') }})
    
