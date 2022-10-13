from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Any:
    type_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeUrl' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
