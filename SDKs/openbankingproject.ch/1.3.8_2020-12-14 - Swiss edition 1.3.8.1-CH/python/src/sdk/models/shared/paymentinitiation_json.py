from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import chargebearer_enum
from . import accountreference16_ch
from . import address
from . import creditoragent7_ch
from . import accountreference16_ch
from . import debtoragent7_ch
from . import amount
from . import exchangerateinformation1
from . import amount
from . import purposecode_enum
from . import remittanceinformationstructured
from . import externalservicelevel1code_enum


@dataclass_json
@dataclass
class PaymentInitiationJSON:
    charge_bearer: Optional[chargebearer_enum.ChargeBearerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargeBearer' }})
    creditor_account: accountreference16_ch.AccountReference16Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAccount' }})
    creditor_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAddress' }})
    creditor_agent: Optional[creditoragent7_ch.CreditorAgent7Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAgent' }})
    creditor_agent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorAgentName' }})
    creditor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorId' }})
    creditor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorName' }})
    creditor_name_and_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorNameAndAddress' }})
    debtor_account: accountreference16_ch.AccountReference16Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAccount' }})
    debtor_agent: Optional[debtoragent7_ch.DebtorAgent7Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAgent' }})
    debtor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorId' }})
    debtor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorName' }})
    end_to_end_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endToEndIdentification' }})
    equivalent_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equivalentAmount' }})
    exchange_rate_information: Optional[exchangerateinformation1.ExchangeRateInformation1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeRateInformation' }})
    instructed_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructedAmount' }})
    intermediary_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intermediaryAgent' }})
    purpose_code: Optional[purposecode_enum.PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purposeCode' }})
    remittance_information_structured: Optional[remittanceinformationstructured.RemittanceInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationStructured' }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittanceInformationUnstructured' }})
    requested_execution_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_level: Optional[externalservicelevel1code_enum.ExternalServiceLevel1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceLevel' }})
    transaction_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionCurrency' }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateCreditor' }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ultimateDebtor' }})
    
