from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StragglerSummary:
    straggler_cause_count: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stragglerCauseCount' }})
    total_straggler_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalStragglerCount' }})
    
