from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RouteStatus:
    r"""RouteStatus
    RouteStatus communicates the observed state of the Route (from the controller).
    """
    
    address: Optional[Addressable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    conditions: Optional[List[GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    traffic: Optional[List[TrafficTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
