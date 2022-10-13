from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detail


@dataclass_json
@dataclass
class SensitiveTextAnnotation:
    details: Optional[dict[str, detail.Detail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    
