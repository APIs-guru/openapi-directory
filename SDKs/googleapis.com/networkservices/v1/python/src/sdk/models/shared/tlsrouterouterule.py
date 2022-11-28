from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TLSRouteRouteRule:
    r"""TLSRouteRouteRule
    Specifies how to match traffic and how to route traffic when traffic is matched.
    """
    
    action: Optional[TLSRouteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    matches: Optional[List[TLSRouteRouteMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    
