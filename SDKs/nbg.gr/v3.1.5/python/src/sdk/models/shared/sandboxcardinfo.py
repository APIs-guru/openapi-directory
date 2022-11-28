from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SandboxCardInfo:
    r"""SandboxCardInfo
    Sandbox card information
    """
    
    expiration: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    holder_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('holderName') }})
    number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    available_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableBalance') }})
    credit_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditLimit') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ledger_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledgerBalance') }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
