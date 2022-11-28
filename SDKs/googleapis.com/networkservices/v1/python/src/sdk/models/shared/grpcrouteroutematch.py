from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRouteRouteMatch:
    r"""GrpcRouteRouteMatch
    Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
    """
    
    headers: Optional[List[GrpcRouteHeaderMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[GrpcRouteMethodMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
