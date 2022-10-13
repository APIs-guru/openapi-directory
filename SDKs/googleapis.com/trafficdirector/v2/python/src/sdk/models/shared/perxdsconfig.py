from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clustersconfigdump
from . import listenersconfigdump
from . import routesconfigdump
from . import scopedroutesconfigdump

class PerXdsConfigStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SYNCED = "SYNCED"
    NOT_SENT = "NOT_SENT"
    STALE = "STALE"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class PerXdsConfig:
    cluster_config: Optional[clustersconfigdump.ClustersConfigDump] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterConfig' }})
    listener_config: Optional[listenersconfigdump.ListenersConfigDump] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listenerConfig' }})
    route_config: Optional[routesconfigdump.RoutesConfigDump] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeConfig' }})
    scoped_route_config: Optional[scopedroutesconfigdump.ScopedRoutesConfigDump] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopedRouteConfig' }})
    status: Optional[PerXdsConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
