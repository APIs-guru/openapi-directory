from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pathsegment
from . import valuematcher


@dataclass_json
@dataclass
class StructMatcher:
    path: Optional[List[pathsegment.PathSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[valuematcher.ValueMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
