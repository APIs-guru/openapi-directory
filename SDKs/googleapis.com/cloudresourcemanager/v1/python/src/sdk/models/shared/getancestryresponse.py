from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ancestor


@dataclass_json
@dataclass
class GetAncestryResponse:
    ancestor: Optional[List[ancestor.Ancestor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestor' }})
    
