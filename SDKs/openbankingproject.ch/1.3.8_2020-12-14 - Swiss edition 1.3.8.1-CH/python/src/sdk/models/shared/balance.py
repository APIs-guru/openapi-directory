from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Balance:
    r"""Balance
    A single balance element.
    
    """
    
    balance_amount: Amount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceAmount') }})
    balance_type: BalanceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceType') }})
    credit_limit_included: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditLimitIncluded') }})
    last_change_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastChangeDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_committed_transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCommittedTransaction') }})
    reference_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
