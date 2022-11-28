from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterDebuggeeResponse:
    r"""RegisterDebuggeeResponse
    Response for registering a debuggee.
    """
    
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    debuggee: Optional[Debuggee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debuggee') }})
    
