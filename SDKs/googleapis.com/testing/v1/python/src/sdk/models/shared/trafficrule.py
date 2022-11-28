from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrafficRule:
    r"""TrafficRule
    Network emulation parameters.
    """
    
    bandwidth: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    burst: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('burst') }})
    delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delay') }})
    packet_duplication_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packetDuplicationRatio') }})
    packet_loss_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packetLossRatio') }})
    
