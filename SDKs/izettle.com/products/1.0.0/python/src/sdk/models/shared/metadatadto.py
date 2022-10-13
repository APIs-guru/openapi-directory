from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcedto


@dataclass_json
@dataclass
class MetadataDto:
    in_pos: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inPos' }})
    source: Optional[sourcedto.SourceDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
