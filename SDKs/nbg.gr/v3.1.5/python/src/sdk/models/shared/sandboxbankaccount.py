from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sandboxbeneficiary
from . import sandboxbankaccountinfo
from . import sandboxparty
from . import sandboxscheduledpayment
from . import sandboxstandingorder
from . import sandboxstatement
from . import sandboxtransaction


@dataclass_json
@dataclass
class SandboxBankAccount:
    beneficiaries: Optional[List[sandboxbeneficiary.SandboxBeneficiary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beneficiaries' }})
    info: Optional[sandboxbankaccountinfo.SandboxBankAccountInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    party: Optional[sandboxparty.SandboxParty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    scheduled_payments: Optional[List[sandboxscheduledpayment.SandboxScheduledPayment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledPayments' }})
    standing_orders: Optional[List[sandboxstandingorder.SandboxStandingOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standingOrders' }})
    statements: Optional[List[sandboxstatement.SandboxStatement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statements' }})
    transactions: Optional[List[sandboxtransaction.SandboxTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
