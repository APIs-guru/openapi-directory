from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pagemodifyfields


@dataclass_json
@dataclass
class PageModify:
    page: Optional[pagemodifyfields.PageModifyFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
