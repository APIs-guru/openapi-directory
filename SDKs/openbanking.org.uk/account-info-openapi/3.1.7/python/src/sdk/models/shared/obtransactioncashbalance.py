from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObTransactionCashBalanceAmount:
    r"""ObTransactionCashBalanceAmount
    Amount of money of the cash balance after a transaction entry is applied to the account..
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObTransactionCashBalance:
    r"""ObTransactionCashBalance
    Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
    """
    
    amount: ObTransactionCashBalanceAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: ObCreditDebitCode2Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    type: ObBalanceType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
