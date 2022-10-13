from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obchargebearertype1code_enum
from . import obcashaccountdebtor4
from . import obchargebearertype1code_enum
from . import obpostaladdress6
from . import obpostaladdress6
from . import obscasupportdata1
from . import links
from . import meta
from . import obrisk1

class ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataAuthorisation:
    authorisation_type: ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisationType' }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataCharges:
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    charge_bearer: obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
class ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation:
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractIdentification' }})
    exchange_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRate' }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rate_type: ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateType' }})
    unit_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitCurrency' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    
class ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation:
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractIdentification' }})
    exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRate' }})
    rate_type: ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateType' }})
    unit_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitCurrency' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    
class ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum(str, Enum):
    NORMAL = "Normal"
    URGENT = "Urgent"


@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unstructured' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6DataInitiation:
    charge_bearer: Optional[obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    creditor: Optional[ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Creditor' }})
    creditor_account: ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    currency_of_transfer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyOfTransfer' }})
    debtor_account: Optional[ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCountryCode' }})
    end_to_end_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndToEndIdentification' }})
    exchange_rate_information: Optional[ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRateInformation' }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedPurpose' }})
    instructed_amount: ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    instruction_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionIdentification' }})
    instruction_priority: Optional[ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionPriority' }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Purpose' }})
    remittance_information: Optional[ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemittanceInformation' }})
    requested_execution_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedExecutionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObWriteInternationalScheduledConsentResponse6DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class ObWriteInternationalScheduledConsentResponse6DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    CONSUMED = "Consumed"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6Data:
    authorisation: Optional[ObWriteInternationalScheduledConsentResponse6DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authorisation' }})
    charges: Optional[List[ObWriteInternationalScheduledConsentResponse6DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Charges' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cut_off_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CutOffDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[obcashaccountdebtor4.ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Debtor' }})
    exchange_rate_information: Optional[ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRateInformation' }})
    expected_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedExecutionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expected_settlement_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedSettlementDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteInternationalScheduledConsentResponse6DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    permission: ObWriteInternationalScheduledConsentResponse6DataPermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    read_refund_account: Optional[ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadRefundAccount' }})
    sca_support_data: Optional[obscasupportdata1.ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SCASupportData' }})
    status: ObWriteInternationalScheduledConsentResponse6DataStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_update_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalScheduledConsentResponse6:
    data: ObWriteInternationalScheduledConsentResponse6Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
