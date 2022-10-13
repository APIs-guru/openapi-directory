from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import splitint64


@dataclass_json
@dataclass
class IntegerList:
    elements: Optional[List[splitint64.SplitInt64]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elements' }})
    
