from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyValuePair:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kv_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kv_key' }})
    kv_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kv_value' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
