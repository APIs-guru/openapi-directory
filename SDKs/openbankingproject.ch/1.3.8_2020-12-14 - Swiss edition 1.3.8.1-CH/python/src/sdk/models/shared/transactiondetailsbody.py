from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionDetailsBody:
    r"""TransactionDetailsBody
    Transaction details.
    """
    
    transaction_details: Transactions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDetails') }})
    
