from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestItem:
    featured_part: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featuredPart' }})
    gaia: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gaia' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    snippet: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
