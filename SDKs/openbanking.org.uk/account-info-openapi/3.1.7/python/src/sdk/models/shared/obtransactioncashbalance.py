from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import obcreditdebitcode_2_enum
from . import obbalancetype1code_enum


@dataclass_json
@dataclass
class ObTransactionCashBalanceAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObTransactionCashBalance:
    amount: ObTransactionCashBalanceAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    credit_debit_indicator: obcreditdebitcode_2_enum.ObCreditDebitCode2Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    type: obbalancetype1code_enum.ObBalanceType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
