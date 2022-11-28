from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LinkTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CHILD_LINKED_SPAN = "CHILD_LINKED_SPAN"
    PARENT_LINKED_SPAN = "PARENT_LINKED_SPAN"


@dataclass_json
@dataclass
class Link:
    r"""Link
    A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
    """
    
    attributes: Optional[Attributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanId') }})
    trace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceId') }})
    type: Optional[LinkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
