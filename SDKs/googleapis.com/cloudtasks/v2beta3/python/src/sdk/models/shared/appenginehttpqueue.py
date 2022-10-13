from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import appenginerouting


@dataclass_json
@dataclass
class AppEngineHTTPQueue:
    app_engine_routing_override: Optional[appenginerouting.AppEngineRouting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineRoutingOverride' }})
    
