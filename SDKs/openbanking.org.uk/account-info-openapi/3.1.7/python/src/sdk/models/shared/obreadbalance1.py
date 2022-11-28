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
class ObReadBalance1DataBalanceAmount:
    r"""ObReadBalance1DataBalanceAmount
    Amount of money of the cash balance.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObReadBalance1DataBalanceCreditLineAmount:
    r"""ObReadBalance1DataBalanceCreditLineAmount
    Amount of money of the credit line.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    
class ObReadBalance1DataBalanceCreditLineTypeEnum(str, Enum):
    AVAILABLE = "Available"
    CREDIT = "Credit"
    EMERGENCY = "Emergency"
    PRE_AGREED = "Pre-Agreed"
    TEMPORARY = "Temporary"


@dataclass_json
@dataclass
class ObReadBalance1DataBalanceCreditLine:
    r"""ObReadBalance1DataBalanceCreditLine
    Set of elements used to provide details on the credit line.
    """
    
    included: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Included') }})
    amount: Optional[ObReadBalance1DataBalanceCreditLineAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    type: Optional[ObReadBalance1DataBalanceCreditLineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObReadBalance1DataBalance:
    r"""ObReadBalance1DataBalance
    Set of elements used to define the balance details.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    amount: ObReadBalance1DataBalanceAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: ObCreditDebitCode2Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: ObBalanceType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    credit_line: Optional[List[ObReadBalance1DataBalanceCreditLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditLine') }})
    

@dataclass_json
@dataclass
class ObReadBalance1Data:
    balance: List[ObReadBalance1DataBalance] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Balance') }})
    

@dataclass_json
@dataclass
class ObReadBalance1:
    data: ObReadBalance1Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
