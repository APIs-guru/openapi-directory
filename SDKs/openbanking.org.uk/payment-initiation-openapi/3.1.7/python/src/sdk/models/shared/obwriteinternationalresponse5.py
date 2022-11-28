from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataCharges:
    r"""ObWriteInternationalResponse5DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: ObChargeBearerType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
class ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataExchangeRateInformation:
    r"""ObWriteInternationalResponse5DataExchangeRateInformation
    Further detailed information on the exchange rate that has been used in the payment transaction.
    """
    
    exchange_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRate') }})
    rate_type: ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    unit_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitCurrency') }})
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractIdentification') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiationCreditor:
    r"""ObWriteInternationalResponse5DataInitiationCreditor
    Party to which an amount of money is due.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiationCreditorAccount:
    r"""ObWriteInternationalResponse5DataInitiationCreditorAccount
    Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiationCreditorAgent:
    r"""ObWriteInternationalResponse5DataInitiationCreditorAgent
    Financial institution servicing an account for the creditor.
    """
    
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiationDebtorAccount:
    r"""ObWriteInternationalResponse5DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    
class ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiationExchangeRateInformation:
    r"""ObWriteInternationalResponse5DataInitiationExchangeRateInformation
    Provides details on the currency exchange rate and contract.
    """
    
    rate_type: ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    unit_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitCurrency') }})
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractIdentification') }})
    exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRate') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiationInstructedAmount:
    r"""ObWriteInternationalResponse5DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    
class ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum(str, Enum):
    NORMAL = "Normal"
    URGENT = "Urgent"


@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiationRemittanceInformation:
    r"""ObWriteInternationalResponse5DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataInitiation:
    r"""ObWriteInternationalResponse5DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
    """
    
    creditor_account: ObWriteInternationalResponse5DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    currency_of_transfer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyOfTransfer') }})
    end_to_end_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndToEndIdentification') }})
    instructed_amount: ObWriteInternationalResponse5DataInitiationInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    instruction_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionIdentification') }})
    charge_bearer: Optional[ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    creditor: Optional[ObWriteInternationalResponse5DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    creditor_agent: Optional[ObWriteInternationalResponse5DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_account: Optional[ObWriteInternationalResponse5DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCountryCode') }})
    exchange_rate_information: Optional[ObWriteInternationalResponse5DataInitiationExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRateInformation') }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedPurpose') }})
    instruction_priority: Optional[ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionPriority') }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }})
    remittance_information: Optional[ObWriteInternationalResponse5DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_FURTHER_AUTHORISATION = "AwaitingFurtherAuthorisation"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataMultiAuthorisation:
    r"""ObWriteInternationalResponse5DataMultiAuthorisation
    The multiple authorisation flow response from the ASPSP.
    """
    
    status: ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberReceived') }})
    number_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberRequired') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataRefundAccount:
    r"""ObWriteInternationalResponse5DataRefundAccount
    Provides the details to identify an account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataRefundAgent:
    r"""ObWriteInternationalResponse5DataRefundAgent
    Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
    """
    
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataRefundCreditor:
    r"""ObWriteInternationalResponse5DataRefundCreditor
    Set of elements used to identify a person or an organisation.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5DataRefund:
    account: ObWriteInternationalResponse5DataRefundAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    agent: Optional[ObWriteInternationalResponse5DataRefundAgent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Agent') }})
    creditor: Optional[ObWriteInternationalResponse5DataRefundCreditor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    
class ObWriteInternationalResponse5DataStatusEnum(str, Enum):
    ACCEPTED_CREDIT_SETTLEMENT_COMPLETED = "AcceptedCreditSettlementCompleted"
    ACCEPTED_SETTLEMENT_COMPLETED = "AcceptedSettlementCompleted"
    ACCEPTED_SETTLEMENT_IN_PROCESS = "AcceptedSettlementInProcess"
    ACCEPTED_WITHOUT_POSTING = "AcceptedWithoutPosting"
    PENDING = "Pending"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteInternationalResponse5Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteInternationalResponse5DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    international_payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InternationalPaymentId') }})
    status: ObWriteInternationalResponse5DataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    charges: Optional[List[ObWriteInternationalResponse5DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    debtor: Optional[ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    exchange_rate_information: Optional[ObWriteInternationalResponse5DataExchangeRateInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRateInformation') }})
    expected_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedExecutionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expected_settlement_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedSettlementDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    multi_authorisation: Optional[ObWriteInternationalResponse5DataMultiAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAuthorisation') }})
    refund: Optional[ObWriteInternationalResponse5DataRefund] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Refund') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalResponse5:
    data: ObWriteInternationalResponse5Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
