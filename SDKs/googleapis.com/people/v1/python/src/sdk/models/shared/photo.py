from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fieldmetadata


@dataclass_json
@dataclass
class Photo:
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
