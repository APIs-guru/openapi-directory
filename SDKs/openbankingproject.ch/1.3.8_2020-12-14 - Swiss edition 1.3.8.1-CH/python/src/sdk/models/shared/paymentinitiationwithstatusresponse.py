from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import address
from . import creditoragent7_ch
from . import accountreference16_ch
from . import amount
from . import purposecode_enum
from . import remittanceinformationstructured
from . import transactionstatus_enum


@dataclass_json
@dataclass
class PaymentInitiationWithStatusResponse:
    creditor_account: accountreference16_ch.AccountReference16Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAccount' }})
    creditor_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAddress' }})
    creditor_agent: Optional[creditoragent7_ch.CreditorAgent7Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAgent' }})
    creditor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorName' }})
    debtor_account: accountreference16_ch.AccountReference16Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAccount' }})
    end_to_end_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endToEndIdentification' }})
    instructed_amount: amount.Amount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructedAmount' }})
    purpose_code: Optional[purposecode_enum.PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purposeCode' }})
    remittance_information_structured: Optional[remittanceinformationstructured.RemittanceInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationStructured' }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationUnstructured' }})
    remittance_information_unstructured_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationUnstructuredArray' }})
    requested_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_execution_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedExecutionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[transactionstatus_enum.TransactionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateCreditor' }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateDebtor' }})
    
