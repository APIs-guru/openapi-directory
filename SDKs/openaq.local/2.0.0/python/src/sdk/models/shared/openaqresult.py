from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta


@dataclass_json
@dataclass
class OpenAqResult:
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
