from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import position


@dataclass_json
@dataclass
class ApproximateSplitRequest:
    fraction_consumed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fractionConsumed' }})
    fraction_of_remainder: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fractionOfRemainder' }})
    position: Optional[position.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
