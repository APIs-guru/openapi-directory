from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeTarget:
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    
