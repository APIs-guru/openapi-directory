from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryInput:
    r"""QueryInput
    Represents a query.
    """
    
    metadata: Optional[QueryMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    params: Optional[Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    schedule: Optional[QuerySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

@dataclass_json
@dataclass
class Query:
    r"""Query
    Represents a query.
    """
    
    metadata: Optional[QueryMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    params: Optional[Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryId') }})
    schedule: Optional[QuerySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
