from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SandboxBankAccount:
    r"""SandboxBankAccount
    Sandbox bank account
    """
    
    beneficiaries: Optional[List[SandboxBeneficiary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beneficiaries') }})
    info: Optional[SandboxBankAccountInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    party: Optional[SandboxParty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    scheduled_payments: Optional[List[SandboxScheduledPayment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledPayments') }})
    standing_orders: Optional[List[SandboxStandingOrder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standingOrders') }})
    statements: Optional[List[SandboxStatement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    transactions: Optional[List[SandboxTransaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
