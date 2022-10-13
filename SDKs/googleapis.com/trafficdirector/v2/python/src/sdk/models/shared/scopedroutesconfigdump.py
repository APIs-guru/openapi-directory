from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamicscopedrouteconfigs
from . import inlinescopedrouteconfigs


@dataclass_json
@dataclass
class ScopedRoutesConfigDump:
    dynamic_scoped_route_configs: Optional[List[dynamicscopedrouteconfigs.DynamicScopedRouteConfigs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicScopedRouteConfigs' }})
    inline_scoped_route_configs: Optional[List[inlinescopedrouteconfigs.InlineScopedRouteConfigs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineScopedRouteConfigs' }})
    
