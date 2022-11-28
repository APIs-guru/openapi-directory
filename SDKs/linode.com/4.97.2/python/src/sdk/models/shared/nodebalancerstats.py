from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodeBalancerStatsDataTraffic:
    r"""NodeBalancerStatsDataTraffic
    Traffic statistics for this NodeBalancer.
    
    """
    
    in_: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    out: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out') }})
    

@dataclass_json
@dataclass
class NodeBalancerStatsData:
    r"""NodeBalancerStatsData
    The data returned about this NodeBalancers.
    
    """
    
    connections: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    traffic: Optional[NodeBalancerStatsDataTraffic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    

@dataclass_json
@dataclass
class NodeBalancerStats:
    r"""NodeBalancerStats
    Stats for this NodeBalancer.
    
    """
    
    data: Optional[NodeBalancerStatsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
