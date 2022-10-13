from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import page


@dataclass_json
@dataclass
class TextAnnotation:
    pages: Optional[List[page.Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
