from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Trace:
    r"""Trace
    A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
    """
    
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    spans: Optional[List[TraceSpan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spans') }})
    trace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceId') }})
    
