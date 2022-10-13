from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import displayedproperty


@dataclass_json
@dataclass
class Metaline:
    properties: Optional[List[displayedproperty.DisplayedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
