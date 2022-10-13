from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BinLogCoordinates:
    bin_log_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binLogFileName' }})
    bin_log_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binLogPosition' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
