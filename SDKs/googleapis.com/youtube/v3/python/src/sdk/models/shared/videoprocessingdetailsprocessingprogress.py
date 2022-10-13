from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoProcessingDetailsProcessingProgress:
    parts_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partsProcessed' }})
    parts_total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partsTotal' }})
    time_left_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeLeftMs' }})
    
