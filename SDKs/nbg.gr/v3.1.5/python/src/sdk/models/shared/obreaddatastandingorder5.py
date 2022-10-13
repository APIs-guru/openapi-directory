from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obstandingorder5


@dataclass_json
@dataclass
class ObReadDataStandingOrder5:
    standing_order: Optional[List[obstandingorder5.ObStandingOrder5]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandingOrder' }})
    
