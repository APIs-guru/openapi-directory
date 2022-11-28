from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScopedRoutesConfigDump:
    r"""ScopedRoutesConfigDump
    Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
    """
    
    dynamic_scoped_route_configs: Optional[List[DynamicScopedRouteConfigs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicScopedRouteConfigs') }})
    inline_scoped_route_configs: Optional[List[InlineScopedRouteConfigs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineScopedRouteConfigs') }})
    
