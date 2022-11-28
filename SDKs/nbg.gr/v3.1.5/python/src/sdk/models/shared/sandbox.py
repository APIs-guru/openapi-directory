from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Sandbox:
    r"""Sandbox
    Sandbox model
    """
    
    sandbox_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sandboxId') }})
    users: Optional[List[SandboxUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
