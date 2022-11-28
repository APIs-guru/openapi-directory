from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PerXdsConfigStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SYNCED = "SYNCED"
    NOT_SENT = "NOT_SENT"
    STALE = "STALE"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class PerXdsConfig:
    r"""PerXdsConfig
    Detailed config (per xDS) with status. [#next-free-field: 6]
    """
    
    cluster_config: Optional[ClustersConfigDump] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterConfig') }})
    listener_config: Optional[ListenersConfigDump] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listenerConfig') }})
    route_config: Optional[RoutesConfigDump] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeConfig') }})
    scoped_route_config: Optional[ScopedRoutesConfigDump] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopedRouteConfig') }})
    status: Optional[PerXdsConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
