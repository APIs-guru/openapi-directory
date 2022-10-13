from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obcreditdebitcode_enum
from . import obcreditline1
from . import obbalancetype1code_enum


@dataclass_json
@dataclass
class ObCashBalance1:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    credit_debit_indicator: obcreditdebitcode_enum.ObCreditDebitCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    credit_line: Optional[List[obcreditline1.ObCreditLine1]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditLine' }})
    date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: obbalancetype1code_enum.ObBalanceType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
