from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obchargebearertype1code_enum
from . import obpostaladdress6
from . import obpostaladdress6
from . import obrisk1


@dataclass_json
@dataclass
class ObWriteInternational3DataInitiationCreditor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    

@dataclass_json
@dataclass
class ObWriteInternational3DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternational3DataInitiationCreditorAgent:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    

@dataclass_json
@dataclass
class ObWriteInternational3DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    
class ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternational3DataInitiationExchangeRateInformation:
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractIdentification' }})
    exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRate' }})
    rate_type: ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateType' }})
    unit_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitCurrency' }})
    

@dataclass_json
@dataclass
class ObWriteInternational3DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    
class ObWriteInternational3DataInitiationInstructionPriorityEnum(str, Enum):
    NORMAL = "Normal"
    URGENT = "Urgent"


@dataclass_json
@dataclass
class ObWriteInternational3DataInitiationRemittanceInformation:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unstructured' }})
    

@dataclass_json
@dataclass
class ObWriteInternational3DataInitiation:
    charge_bearer: Optional[obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    creditor: Optional[ObWriteInternational3DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Creditor' }})
    creditor_account: ObWriteInternational3DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[ObWriteInternational3DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    currency_of_transfer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyOfTransfer' }})
    debtor_account: Optional[ObWriteInternational3DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCountryCode' }})
    end_to_end_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndToEndIdentification' }})
    exchange_rate_information: Optional[ObWriteInternational3DataInitiationExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRateInformation' }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedPurpose' }})
    instructed_amount: ObWriteInternational3DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    instruction_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionIdentification' }})
    instruction_priority: Optional[ObWriteInternational3DataInitiationInstructionPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionPriority' }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Purpose' }})
    remittance_information: Optional[ObWriteInternational3DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemittanceInformation' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    

@dataclass_json
@dataclass
class ObWriteInternational3Data:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    initiation: ObWriteInternational3DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    

@dataclass_json
@dataclass
class ObWriteInternational3:
    data: ObWriteInternational3Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
