from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Progress:
    analyzed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzed' }})
    encoded: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoded' }})
    notified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notified' }})
    uploaded: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploaded' }})
    
