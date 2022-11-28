from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation
    The authorisation type request from the TPP.
    """
    
    authorisation_type: ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataCharges:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: ObChargeBearerType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount
    Identification assigned by an institution to identify an account. This identification is known by the account owner.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount
    The amount of the final Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount
    The amount of the first Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount
    The amount of the recurring Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6DataInitiation:
    r"""ObWriteDomesticStandingOrderConsentResponse6DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
    """
    
    creditor_account: ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    first_payment_amount: ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentAmount') }})
    first_payment_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    debtor_account: Optional[ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    final_payment_amount: Optional[ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentAmount') }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    recurring_payment_amount: Optional[ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentAmount') }})
    recurring_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    CONSUMED = "Consumed"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteDomesticStandingOrderConsentResponse6DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    permission: ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    status: ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    authorisation: Optional[ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authorisation') }})
    charges: Optional[List[ObWriteDomesticStandingOrderConsentResponse6DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    cut_off_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CutOffDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    read_refund_account: Optional[ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRefundAccount') }})
    sca_support_data: Optional[ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCASupportData') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsentResponse6:
    data: ObWriteDomesticStandingOrderConsentResponse6Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: ObRisk1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
