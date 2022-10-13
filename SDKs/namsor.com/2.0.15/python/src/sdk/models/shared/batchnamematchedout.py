from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namematchedout


@dataclass_json
@dataclass
class BatchNameMatchedOut:
    matched_names: Optional[List[namematchedout.NameMatchedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedNames' }})
    
