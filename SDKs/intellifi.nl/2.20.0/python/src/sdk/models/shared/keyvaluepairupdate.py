from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyValuePairUpdate:
    kv_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kv_value' }})
    
