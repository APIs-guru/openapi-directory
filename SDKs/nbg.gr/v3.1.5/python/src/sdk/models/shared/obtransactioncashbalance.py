from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obcreditdebitcode_enum
from . import obbalancetype1code_enum


@dataclass_json
@dataclass
class ObTransactionCashBalance:
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    credit_debit_indicator: obcreditdebitcode_enum.ObCreditDebitCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    type: obbalancetype1code_enum.ObBalanceType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
