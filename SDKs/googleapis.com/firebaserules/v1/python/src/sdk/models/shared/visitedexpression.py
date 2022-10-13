from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import sourceposition


@dataclass_json
@dataclass
class VisitedExpression:
    source_position: Optional[sourceposition.SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePosition' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
