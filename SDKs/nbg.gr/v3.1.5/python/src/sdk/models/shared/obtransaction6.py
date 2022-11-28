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
class ObTransaction6:
    r"""ObTransaction6
    Provides further details on an entry in the report.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    booking_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookingDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_debit_indicator: ObCreditDebitCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    status: ObEntryStatus1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    balance: Optional[ObTransactionCashBalance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Balance') }})
    creditor_account: Optional[ObCashAccount6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    debtor_account: Optional[ObCashAccount6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    proprietary_bank_transaction_code: Optional[ProprietaryBankTransactionCodeStructure1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProprietaryBankTransactionCode') }})
    transaction_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionInformation') }})
    transaction_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionReference') }})
    value_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
