from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TranslateTextRequest:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    q: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'q' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
