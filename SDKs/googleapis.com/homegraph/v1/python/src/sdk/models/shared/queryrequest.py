from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryRequest:
    r"""QueryRequest
    Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
    """
    
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUserId') }})
    inputs: Optional[List[QueryRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
