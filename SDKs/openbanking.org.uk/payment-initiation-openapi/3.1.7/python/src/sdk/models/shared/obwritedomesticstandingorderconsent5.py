from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataAuthorisation:
    r"""ObWriteDomesticStandingOrderConsent5DataAuthorisation
    The authorisation type request from the TPP.
    """
    
    authorisation_type: ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount:
    r"""ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount
    Identification assigned by an institution to identify an account. This identification is known by the account owner.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount:
    r"""ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount
    Provides the details to identify the debtor account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount:
    r"""ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount
    The amount of the final Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount:
    r"""ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount
    The amount of the first Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount:
    r"""ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount
    The amount of the recurring Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiation:
    r"""ObWriteDomesticStandingOrderConsent5DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
    """
    
    creditor_account: ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    first_payment_amount: ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentAmount') }})
    first_payment_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    debtor_account: Optional[ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    final_payment_amount: Optional[ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentAmount') }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    recurring_payment_amount: Optional[ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentAmount') }})
    recurring_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteDomesticStandingOrderConsent5DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5Data:
    initiation: ObWriteDomesticStandingOrderConsent5DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    permission: ObWriteDomesticStandingOrderConsent5DataPermissionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    authorisation: Optional[ObWriteDomesticStandingOrderConsent5DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authorisation') }})
    read_refund_account: Optional[ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRefundAccount') }})
    sca_support_data: Optional[ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCASupportData') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5:
    data: ObWriteDomesticStandingOrderConsent5Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: ObRisk1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
