from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attributes

class LinkTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CHILD_LINKED_SPAN = "CHILD_LINKED_SPAN"
    PARENT_LINKED_SPAN = "PARENT_LINKED_SPAN"


@dataclass_json
@dataclass
class Link:
    attributes: Optional[attributes.Attributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanId' }})
    trace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceId' }})
    type: Optional[LinkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
