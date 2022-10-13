from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pagefields


@dataclass_json
@dataclass
class Page:
    page: Optional[pagefields.PageFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
