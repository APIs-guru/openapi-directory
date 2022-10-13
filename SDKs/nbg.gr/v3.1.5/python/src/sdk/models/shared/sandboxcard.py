from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sandboxcardinfo
from . import sandboxparty
from . import sandboxstatement
from . import sandboxtransaction


@dataclass_json
@dataclass
class SandboxCard:
    info: Optional[sandboxcardinfo.SandboxCardInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    party: Optional[sandboxparty.SandboxParty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    statements: Optional[List[sandboxstatement.SandboxStatement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statements' }})
    transactions: Optional[List[sandboxtransaction.SandboxTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
