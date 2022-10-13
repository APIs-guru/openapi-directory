from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fieldmetadata


@dataclass_json
@dataclass
class RelationshipStatus:
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedValue' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
