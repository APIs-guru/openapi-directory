from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RouteSpec:
    r"""RouteSpec
    RouteSpec holds the desired state of the Route (from the client).
    """
    
    traffic: Optional[List[TrafficTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    
