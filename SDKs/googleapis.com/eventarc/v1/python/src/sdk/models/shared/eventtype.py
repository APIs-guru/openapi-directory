from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventType:
    r"""EventType
    A representation of the event type resource.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSchemaUri') }})
    filtering_attributes: Optional[List[FilteringAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringAttributes') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
