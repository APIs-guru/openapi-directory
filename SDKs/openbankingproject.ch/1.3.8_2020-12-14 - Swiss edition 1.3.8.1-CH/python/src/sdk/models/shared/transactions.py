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
class Transactions:
    r"""Transactions
    Transaction details.
    """
    
    transaction_amount: Amount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionAmount') }})
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformation') }})
    additional_information_structured: Optional[AdditionalInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformationStructured') }})
    balance_after_transaction: Optional[Balance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceAfterTransaction') }})
    bank_transaction_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankTransactionCode') }})
    batch_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchIndicator') }})
    batch_number_of_transactions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchNumberOfTransactions') }})
    booking_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    creditor_account: Optional[AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAccount') }})
    creditor_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAgent') }})
    creditor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorId') }})
    creditor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorName') }})
    currency_exchange: Optional[List[ReportExchangeRate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyExchange') }})
    debtor_account: Optional[AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    debtor_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAgent') }})
    debtor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorName') }})
    end_to_end_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endToEndId') }})
    entry_details: Optional[List[EntryDetailsElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryDetails') }})
    entry_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryReference') }})
    mandate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateId') }})
    proprietary_bank_transaction_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proprietaryBankTransactionCode') }})
    purpose_code: Optional[PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeCode') }})
    remittance_information_structured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructured') }})
    remittance_information_structured_array: Optional[List[RemittanceInformationStructured]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructuredArray') }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructured') }})
    remittance_information_unstructured_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructuredArray') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateCreditor') }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateDebtor') }})
    value_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
