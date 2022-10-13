from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamicrouteconfig
from . import staticrouteconfig


@dataclass_json
@dataclass
class RoutesConfigDump:
    dynamic_route_configs: Optional[List[dynamicrouteconfig.DynamicRouteConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicRouteConfigs' }})
    static_route_configs: Optional[List[staticrouteconfig.StaticRouteConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticRouteConfigs' }})
    
