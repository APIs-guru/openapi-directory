from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
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
    amount: ObActiveOrHistoricCurrencyAndAmount9 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    booking_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookingDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_debit_indicator: ObCreditDebitCode1Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    status: ObEntryStatus1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    address_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressLine') }})
    balance: Optional[ObTransactionCashBalance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Balance') }})
    bank_transaction_code: Optional[ObBankTransactionCodeStructure1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransactionCode') }})
    card_instrument: Optional[ObTransactionCardInstrument1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardInstrument') }})
    charge_amount: Optional[ObActiveOrHistoricCurrencyAndAmount10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeAmount') }})
    creditor_account: Optional[ObCashAccount60] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    creditor_agent: Optional[ObBranchAndFinancialInstitutionIdentification61] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    currency_exchange: Optional[ObCurrencyExchange5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyExchange') }})
    debtor_account: Optional[ObCashAccount61] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    debtor_agent: Optional[ObBranchAndFinancialInstitutionIdentification62] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAgent') }})
    merchant_details: Optional[ObMerchantDetails1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MerchantDetails') }})
    proprietary_bank_transaction_code: Optional[ProprietaryBankTransactionCodeStructure1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProprietaryBankTransactionCode') }})
    statement_reference: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementReference') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    transaction_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionInformation') }})
    transaction_mutability: Optional[ObTransactionMutability1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionMutability') }})
    transaction_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionReference') }})
    value_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
