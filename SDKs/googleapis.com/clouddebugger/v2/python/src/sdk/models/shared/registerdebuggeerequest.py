from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterDebuggeeRequest:
    r"""RegisterDebuggeeRequest
    Request to register a debuggee.
    """
    
    debuggee: Optional[Debuggee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debuggee') }})
    
