from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TCPRouteRouteAction:
    r"""TCPRouteRouteAction
    The specifications for routing traffic and applying associated policies.
    """
    
    destinations: Optional[List[TCPRouteRouteDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    original_destination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalDestination') }})
    
