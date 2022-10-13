from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TruncatableString:
    truncated_byte_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncatedByteCount' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
