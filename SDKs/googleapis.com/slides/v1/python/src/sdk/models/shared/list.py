from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nestinglevel


@dataclass_json
@dataclass
class List:
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listId' }})
    nesting_level: Optional[dict[str, nestinglevel.NestingLevel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestingLevel' }})
    
