from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obtransactioncashbalance
from . import obcreditdebitcode_enum
from . import obcashaccount6
from . import obcashaccount6
from . import proprietarybanktransactioncodestructure1
from . import obentrystatus1code_enum


@dataclass_json
@dataclass
class ObTransaction6:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    balance: Optional[obtransactioncashbalance.ObTransactionCashBalance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Balance' }})
    booking_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BookingDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_debit_indicator: obcreditdebitcode_enum.ObCreditDebitCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    creditor_account: Optional[obcashaccount6.ObCashAccount6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    debtor_account: Optional[obcashaccount6.ObCashAccount6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    proprietary_bank_transaction_code: Optional[proprietarybanktransactioncodestructure1.ProprietaryBankTransactionCodeStructure1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProprietaryBankTransactionCode' }})
    status: obentrystatus1code_enum.ObEntryStatus1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    transaction_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionInformation' }})
    transaction_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionReference' }})
    value_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
