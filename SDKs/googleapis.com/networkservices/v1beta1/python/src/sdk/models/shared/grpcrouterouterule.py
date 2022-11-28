from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRouteRouteRule:
    r"""GrpcRouteRouteRule
    Describes how to route traffic.
    """
    
    action: Optional[GrpcRouteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    matches: Optional[List[GrpcRouteRouteMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    
