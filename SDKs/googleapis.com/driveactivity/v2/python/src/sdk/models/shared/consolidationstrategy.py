from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConsolidationStrategy:
    legacy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacy' }})
    none: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'none' }})
    
