from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destination
from . import source


@dataclass_json
@dataclass
class Rule:
    destinations: Optional[List[destination.Destination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    sources: Optional[List[source.Source]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
