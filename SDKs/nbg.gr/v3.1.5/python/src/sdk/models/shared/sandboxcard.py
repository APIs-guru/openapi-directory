from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SandboxCard:
    r"""SandboxCard
    Sandbox card
    """
    
    info: Optional[SandboxCardInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    party: Optional[SandboxParty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    statements: Optional[List[SandboxStatement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    transactions: Optional[List[SandboxTransaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
