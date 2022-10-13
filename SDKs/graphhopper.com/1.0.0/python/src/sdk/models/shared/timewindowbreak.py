from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeWindowBreak:
    duration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    earliest: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earliest' }})
    latest: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest' }})
    
