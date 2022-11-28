from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TCPRouteRouteMatch:
    r"""TCPRouteRouteMatch
    RouteMatch defines the predicate used to match requests to a given action. Multiple match types are \"OR\"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
