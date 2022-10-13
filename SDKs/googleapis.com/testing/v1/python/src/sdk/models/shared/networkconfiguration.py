from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trafficrule
from . import trafficrule


@dataclass_json
@dataclass
class NetworkConfiguration:
    down_rule: Optional[trafficrule.TrafficRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downRule' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    up_rule: Optional[trafficrule.TrafficRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upRule' }})
    
