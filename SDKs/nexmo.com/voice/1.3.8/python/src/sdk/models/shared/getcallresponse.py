from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import direction_enum
from . import from_
from . import to


@dataclass_json
@dataclass
class GetCallResponseLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetCallResponseLinks:
    self: Optional[GetCallResponseLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetCallResponse:
    links: Optional[GetCallResponseLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    conversation_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_uuid' }})
    direction: Optional[direction_enum.DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    from_: Optional[from_.From] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    to: Optional[to.To] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
