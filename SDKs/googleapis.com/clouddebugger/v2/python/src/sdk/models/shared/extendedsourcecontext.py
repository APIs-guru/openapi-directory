from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcecontext


@dataclass_json
@dataclass
class ExtendedSourceContext:
    context: Optional[sourcecontext.SourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    
