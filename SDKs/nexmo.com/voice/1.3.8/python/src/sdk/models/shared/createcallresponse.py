from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import direction_enum


@dataclass_json
@dataclass
class CreateCallResponse:
    conversation_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_uuid' }})
    direction: Optional[direction_enum.DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
