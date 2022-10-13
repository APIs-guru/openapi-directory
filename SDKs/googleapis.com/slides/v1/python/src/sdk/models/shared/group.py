from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pageelement


@dataclass_json
@dataclass
class Group:
    children: Optional[List[pageelement.PageElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    
