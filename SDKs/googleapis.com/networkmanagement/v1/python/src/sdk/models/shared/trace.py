from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Trace:
    r"""Trace
    Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```
    """
    
    endpoint_info: Optional[EndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointInfo') }})
    steps: Optional[List[Step]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
