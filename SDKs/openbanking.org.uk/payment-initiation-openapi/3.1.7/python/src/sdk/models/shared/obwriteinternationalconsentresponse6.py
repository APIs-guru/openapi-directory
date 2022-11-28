from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataAuthorisation:
    r"""ObWriteInternationalConsentResponse6DataAuthorisation
    The authorisation type request from the TPP.
    """
    
    authorisation_type: ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataCharges:
    r"""ObWriteInternationalConsentResponse6DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: ObChargeBearerType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
class ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataExchangeRateInformation:
    r"""ObWriteInternationalConsentResponse6DataExchangeRateInformation
    Further detailed information on the exchange rate that has been used in the payment transaction.
    """
    
    exchange_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRate') }})
    rate_type: ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    unit_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitCurrency') }})
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractIdentification') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiationCreditor:
    r"""ObWriteInternationalConsentResponse6DataInitiationCreditor
    Party to which an amount of money is due.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiationCreditorAccount:
    r"""ObWriteInternationalConsentResponse6DataInitiationCreditorAccount
    Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiationCreditorAgent:
    r"""ObWriteInternationalConsentResponse6DataInitiationCreditorAgent
    Financial institution servicing an account for the creditor.
    """
    
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiationDebtorAccount:
    r"""ObWriteInternationalConsentResponse6DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    
class ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation:
    r"""ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation
    Provides details on the currency exchange rate and contract.
    """
    
    rate_type: ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    unit_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitCurrency') }})
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractIdentification') }})
    exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRate') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiationInstructedAmount:
    r"""ObWriteInternationalConsentResponse6DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    
class ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum(str, Enum):
    NORMAL = "Normal"
    URGENT = "Urgent"


@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation:
    r"""ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6DataInitiation:
    r"""ObWriteInternationalConsentResponse6DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
    """
    
    creditor_account: ObWriteInternationalConsentResponse6DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    currency_of_transfer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyOfTransfer') }})
    end_to_end_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndToEndIdentification') }})
    instructed_amount: ObWriteInternationalConsentResponse6DataInitiationInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    instruction_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionIdentification') }})
    charge_bearer: Optional[ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    creditor: Optional[ObWriteInternationalConsentResponse6DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    creditor_agent: Optional[ObWriteInternationalConsentResponse6DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_account: Optional[ObWriteInternationalConsentResponse6DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCountryCode') }})
    exchange_rate_information: Optional[ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRateInformation') }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedPurpose') }})
    instruction_priority: Optional[ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionPriority') }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }})
    remittance_information: Optional[ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteInternationalConsentResponse6DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class ObWriteInternationalConsentResponse6DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    CONSUMED = "Consumed"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteInternationalConsentResponse6DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    status: ObWriteInternationalConsentResponse6DataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    authorisation: Optional[ObWriteInternationalConsentResponse6DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authorisation') }})
    charges: Optional[List[ObWriteInternationalConsentResponse6DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    cut_off_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CutOffDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    exchange_rate_information: Optional[ObWriteInternationalConsentResponse6DataExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRateInformation') }})
    expected_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedExecutionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expected_settlement_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedSettlementDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read_refund_account: Optional[ObWriteInternationalConsentResponse6DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRefundAccount') }})
    sca_support_data: Optional[ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCASupportData') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalConsentResponse6:
    data: ObWriteInternationalConsentResponse6Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: ObRisk1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
