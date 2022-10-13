from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stragglerdebugginginfo


@dataclass_json
@dataclass
class StragglerInfo:
    causes: Optional[dict[str, stragglerdebugginginfo.StragglerDebuggingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'causes' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
