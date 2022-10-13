from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segment


@dataclass_json
@dataclass
class ParsedData:
    segments: Optional[List[segment.Segment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
