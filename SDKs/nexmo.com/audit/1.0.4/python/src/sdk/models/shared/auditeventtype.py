from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventtypes_enum


@dataclass_json
@dataclass
class AuditEventType:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    type: Optional[eventtypes_enum.EventTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
