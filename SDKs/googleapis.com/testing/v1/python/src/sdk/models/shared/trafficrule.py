from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrafficRule:
    bandwidth: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    burst: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'burst' }})
    delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay' }})
    packet_duplication_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packetDuplicationRatio' }})
    packet_loss_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packetLossRatio' }})
    
