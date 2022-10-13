from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import multiclusterroutinguseany
from . import singleclusterrouting


@dataclass_json
@dataclass
class AppProfile:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    multi_cluster_routing_use_any: Optional[multiclusterroutinguseany.MultiClusterRoutingUseAny] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiClusterRoutingUseAny' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    single_cluster_routing: Optional[singleclusterrouting.SingleClusterRouting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleClusterRouting' }})
    
