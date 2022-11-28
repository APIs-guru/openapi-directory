from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SettlementTransaction:
    r"""SettlementTransaction
    Settlement transactions give a detailed breakdown of the settlement report.
    """
    
    amount: Optional[SettlementTransactionAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    identifiers: Optional[SettlementTransactionIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifiers') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    transaction: Optional[SettlementTransactionTransaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
