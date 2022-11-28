from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SettlementReport:
    r"""SettlementReport
     Settlement reports detail order-level and item-level credits and debits between you and Google.
    """
    
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    previous_balance: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousBalance') }})
    settlement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settlementId') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    transfer_amount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferAmount') }})
    transfer_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferDate') }})
    transfer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferIds') }})
    
