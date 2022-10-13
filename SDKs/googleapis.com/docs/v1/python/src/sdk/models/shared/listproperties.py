from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nestinglevel


@dataclass_json
@dataclass
class ListProperties:
    nesting_levels: Optional[List[nestinglevel.NestingLevel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestingLevels' }})
    
