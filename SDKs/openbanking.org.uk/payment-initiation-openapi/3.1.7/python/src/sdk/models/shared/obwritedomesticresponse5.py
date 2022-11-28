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
class ObWriteDomesticResponse5DataCharges:
    r"""ObWriteDomesticResponse5DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: ObChargeBearerType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataInitiationCreditorAccount:
    r"""ObWriteDomesticResponse5DataInitiationCreditorAccount
    Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataInitiationDebtorAccount:
    r"""ObWriteDomesticResponse5DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataInitiationInstructedAmount:
    r"""ObWriteDomesticResponse5DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataInitiationRemittanceInformation:
    r"""ObWriteDomesticResponse5DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataInitiation:
    r"""ObWriteDomesticResponse5DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
    """
    
    creditor_account: ObWriteDomesticResponse5DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    end_to_end_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndToEndIdentification') }})
    instructed_amount: ObWriteDomesticResponse5DataInitiationInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    instruction_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionIdentification') }})
    creditor_postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorPostalAddress') }})
    debtor_account: Optional[ObWriteDomesticResponse5DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    remittance_information: Optional[ObWriteDomesticResponse5DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_FURTHER_AUTHORISATION = "AwaitingFurtherAuthorisation"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataMultiAuthorisation:
    r"""ObWriteDomesticResponse5DataMultiAuthorisation
    The multiple authorisation flow response from the ASPSP.
    """
    
    status: ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberReceived') }})
    number_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberRequired') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataRefundAccount:
    r"""ObWriteDomesticResponse5DataRefundAccount
    Provides the details to identify an account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5DataRefund:
    r"""ObWriteDomesticResponse5DataRefund
    Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
    """
    
    account: ObWriteDomesticResponse5DataRefundAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    
class ObWriteDomesticResponse5DataStatusEnum(str, Enum):
    ACCEPTED_CREDIT_SETTLEMENT_COMPLETED = "AcceptedCreditSettlementCompleted"
    ACCEPTED_SETTLEMENT_COMPLETED = "AcceptedSettlementCompleted"
    ACCEPTED_SETTLEMENT_IN_PROCESS = "AcceptedSettlementInProcess"
    ACCEPTED_WITHOUT_POSTING = "AcceptedWithoutPosting"
    PENDING = "Pending"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteDomesticResponse5Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domestic_payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomesticPaymentId') }})
    initiation: ObWriteDomesticResponse5DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    status: ObWriteDomesticResponse5DataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    charges: Optional[List[ObWriteDomesticResponse5DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    debtor: Optional[ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    expected_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedExecutionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expected_settlement_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedSettlementDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    multi_authorisation: Optional[ObWriteDomesticResponse5DataMultiAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAuthorisation') }})
    refund: Optional[ObWriteDomesticResponse5DataRefund] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Refund') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticResponse5:
    data: ObWriteDomesticResponse5Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
