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
class ObWriteInternationalStandingOrderResponse7DataCharges:
    r"""ObWriteInternationalStandingOrderResponse7DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: ObChargeBearerType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationCreditor:
    r"""ObWriteInternationalStandingOrderResponse7DataInitiationCreditor
    Party to which an amount of money is due.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount:
    r"""ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount
    Provides the details to identify the beneficiary account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent:
    r"""ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent
    Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
    This is the servicer of the beneficiary account.
    """
    
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount:
    r"""ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount:
    r"""ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiation:
    r"""ObWriteInternationalStandingOrderResponse7DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
    """
    
    creditor_account: ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    currency_of_transfer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyOfTransfer') }})
    first_payment_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    instructed_amount: ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    charge_bearer: Optional[ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    creditor: Optional[ObWriteInternationalStandingOrderResponse7DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    creditor_agent: Optional[ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_account: Optional[ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCountryCode') }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedPurpose') }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_FURTHER_AUTHORISATION = "AwaitingFurtherAuthorisation"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation:
    r"""ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation
    The multiple authorisation flow response from the ASPSP.
    """
    
    status: ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberReceived') }})
    number_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberRequired') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefundAccount:
    r"""ObWriteInternationalStandingOrderResponse7DataRefundAccount
    Provides the details to identify an account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefundAgent:
    r"""ObWriteInternationalStandingOrderResponse7DataRefundAgent
    Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
    """
    
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefundCreditor:
    r"""ObWriteInternationalStandingOrderResponse7DataRefundCreditor
    Set of elements used to identify a person or an organisation.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefund:
    account: ObWriteInternationalStandingOrderResponse7DataRefundAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    agent: Optional[ObWriteInternationalStandingOrderResponse7DataRefundAgent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Agent') }})
    creditor: Optional[ObWriteInternationalStandingOrderResponse7DataRefundCreditor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    
class ObWriteInternationalStandingOrderResponse7DataStatusEnum(str, Enum):
    CANCELLED = "Cancelled"
    INITIATION_COMPLETED = "InitiationCompleted"
    INITIATION_FAILED = "InitiationFailed"
    INITIATION_PENDING = "InitiationPending"


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteInternationalStandingOrderResponse7DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    international_standing_order_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InternationalStandingOrderId') }})
    status: ObWriteInternationalStandingOrderResponse7DataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    charges: Optional[List[ObWriteInternationalStandingOrderResponse7DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    debtor: Optional[ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    multi_authorisation: Optional[ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAuthorisation') }})
    refund: Optional[ObWriteInternationalStandingOrderResponse7DataRefund] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Refund') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7:
    data: ObWriteInternationalStandingOrderResponse7Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
