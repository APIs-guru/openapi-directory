from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import valuematcher


@dataclass_json
@dataclass
class ListMatcher:
    one_of: Optional[valuematcher.ValueMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneOf' }})
    
