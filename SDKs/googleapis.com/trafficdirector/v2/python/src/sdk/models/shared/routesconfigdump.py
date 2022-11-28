from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RoutesConfigDump:
    r"""RoutesConfigDump
    Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
    """
    
    dynamic_route_configs: Optional[List[DynamicRouteConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicRouteConfigs') }})
    static_route_configs: Optional[List[StaticRouteConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticRouteConfigs') }})
    
