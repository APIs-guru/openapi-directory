from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NiRealtimeData:
    active_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_status' }})
    handset_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handset_status' }})
    
