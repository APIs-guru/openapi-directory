from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TLSRouteRouteMatch:
    r"""TLSRouteRouteMatch
    RouteMatch defines the predicate used to match requests to a given action. Multiple match types are \"AND\"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
    """
    
    alpn: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpn') }})
    sni_host: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sniHost') }})
    
