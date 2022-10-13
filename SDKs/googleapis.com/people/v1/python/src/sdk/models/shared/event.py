from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date
from . import fieldmetadata


@dataclass_json
@dataclass
class Event:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    formatted_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedType' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
