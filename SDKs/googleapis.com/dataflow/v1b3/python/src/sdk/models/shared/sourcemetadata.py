from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceMetadata:
    estimated_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedSizeBytes' }})
    infinite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infinite' }})
    produces_sorted_keys: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producesSortedKeys' }})
    
