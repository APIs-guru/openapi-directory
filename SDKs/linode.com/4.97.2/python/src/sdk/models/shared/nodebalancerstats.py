from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeBalancerStatsDataTraffic:
    in_: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    out: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out' }})
    

@dataclass_json
@dataclass
class NodeBalancerStatsData:
    connections: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    traffic: Optional[NodeBalancerStatsDataTraffic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic' }})
    

@dataclass_json
@dataclass
class NodeBalancerStats:
    data: Optional[NodeBalancerStatsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
