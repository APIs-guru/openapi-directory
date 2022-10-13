from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Detection:
    binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binary' }})
    percent_pages_matched: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentPagesMatched' }})
    
