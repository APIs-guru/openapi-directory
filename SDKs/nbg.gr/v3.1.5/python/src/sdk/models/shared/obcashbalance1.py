from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObCashBalance1:
    r"""ObCashBalance1
    Set of elements used to define the balance details.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: ObCreditDebitCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: ObBalanceType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    credit_line: Optional[List[ObCreditLine1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditLine') }})
    
