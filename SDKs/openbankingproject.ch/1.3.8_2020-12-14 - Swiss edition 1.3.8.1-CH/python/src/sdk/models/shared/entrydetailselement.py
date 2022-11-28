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
class EntryDetailsElement:
    transaction_amount: Amount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionAmount') }})
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
    mandate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateId') }})
    purpose_code: Optional[PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeCode') }})
    remittance_information_structured: Optional[RemittanceInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructured') }})
    remittance_information_structured_array: Optional[List[RemittanceInformationStructured]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructuredArray') }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructured') }})
    remittance_information_unstructured_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructuredArray') }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateCreditor') }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateDebtor') }})
    
