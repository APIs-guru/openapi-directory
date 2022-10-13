from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date
from . import fieldmetadata


@dataclass_json
@dataclass
class Birthday:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
