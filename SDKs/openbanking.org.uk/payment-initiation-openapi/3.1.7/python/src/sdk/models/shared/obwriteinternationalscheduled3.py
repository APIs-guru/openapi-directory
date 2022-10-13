from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obchargebearertype1code_enum
from . import obpostaladdress6
from . import obpostaladdress6
from . import obrisk1


@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiationCreditor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiationCreditorAgent:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    
class ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiationExchangeRateInformation:
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractIdentification' }})
    exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRate' }})
    rate_type: ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateType' }})
    unit_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitCurrency' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    
class ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum(str, Enum):
    NORMAL = "Normal"
    URGENT = "Urgent"


@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiationRemittanceInformation:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unstructured' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduled3DataInitiation:
    charge_bearer: Optional[obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    creditor: Optional[ObWriteInternationalScheduled3DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Creditor' }})
    creditor_account: ObWriteInternationalScheduled3DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[ObWriteInternationalScheduled3DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    currency_of_transfer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyOfTransfer' }})
    debtor_account: Optional[ObWriteInternationalScheduled3DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCountryCode' }})
    end_to_end_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndToEndIdentification' }})
    exchange_rate_information: Optional[ObWriteInternationalScheduled3DataInitiationExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRateInformation' }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedPurpose' }})
    instructed_amount: ObWriteInternationalScheduled3DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    instruction_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionIdentification' }})
    instruction_priority: Optional[ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionPriority' }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Purpose' }})
    remittance_information: Optional[ObWriteInternationalScheduled3DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemittanceInformation' }})
    requested_execution_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedExecutionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduled3Data:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    initiation: ObWriteInternationalScheduled3DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduled3:
    data: ObWriteInternationalScheduled3Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
