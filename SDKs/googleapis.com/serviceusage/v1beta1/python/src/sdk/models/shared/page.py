from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import page


@dataclass_json
@dataclass
class Page:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    subpages: Optional[List[page.Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subpages' }})
    
