from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WatchResponse:
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    
