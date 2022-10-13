from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import reportexchangerate
from . import accountreference16_ch
from . import purposecode_enum
from . import remittanceinformationstructured
from . import remittanceinformationstructured
from . import amount


@dataclass_json
@dataclass
class EntryDetailsElement:
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
    mandate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandateId' }})
    purpose_code: Optional[purposecode_enum.PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purposeCode' }})
    remittance_information_structured: Optional[remittanceinformationstructured.RemittanceInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationStructured' }})
    remittance_information_structured_array: Optional[List[remittanceinformationstructured.RemittanceInformationStructured]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationStructuredArray' }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationUnstructured' }})
    remittance_information_unstructured_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationUnstructuredArray' }})
    transaction_amount: amount.Amount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionAmount' }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateCreditor' }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateDebtor' }})
    
