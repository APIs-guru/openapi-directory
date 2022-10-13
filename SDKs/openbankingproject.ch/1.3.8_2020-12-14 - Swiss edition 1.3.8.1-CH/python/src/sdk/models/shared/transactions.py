from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import additionalinformationstructured
from . import balance
from . import accountreference16_ch
from . import reportexchangerate
from . import accountreference16_ch
from . import entrydetailselement
from . import purposecode_enum
from . import remittanceinformationstructured
from . import amount


@dataclass_json
@dataclass
class Transactions:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInformation' }})
    additional_information_structured: Optional[additionalinformationstructured.AdditionalInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInformationStructured' }})
    balance_after_transaction: Optional[balance.Balance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceAfterTransaction' }})
    bank_transaction_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bankTransactionCode' }})
    batch_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchIndicator' }})
    batch_number_of_transactions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchNumberOfTransactions' }})
    booking_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkId' }})
    creditor_account: Optional[accountreference16_ch.AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAccount' }})
    creditor_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAgent' }})
    creditor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorId' }})
    creditor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorName' }})
    currency_exchange: Optional[List[reportexchangerate.ReportExchangeRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyExchange' }})
    debtor_account: Optional[accountreference16_ch.AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAccount' }})
    debtor_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAgent' }})
    debtor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorName' }})
    end_to_end_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endToEndId' }})
    entry_details: Optional[List[entrydetailselement.EntryDetailsElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryDetails' }})
    entry_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryReference' }})
    mandate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandateId' }})
    proprietary_bank_transaction_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proprietaryBankTransactionCode' }})
    purpose_code: Optional[purposecode_enum.PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purposeCode' }})
    remittance_information_structured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationStructured' }})
    remittance_information_structured_array: Optional[List[remittanceinformationstructured.RemittanceInformationStructured]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationStructuredArray' }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationUnstructured' }})
    remittance_information_unstructured_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationUnstructuredArray' }})
    transaction_amount: amount.Amount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionAmount' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateCreditor' }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateDebtor' }})
    value_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
