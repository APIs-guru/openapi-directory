from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationCreditorAccount:
    r"""ObWriteDomesticStandingOrder3DataInitiationCreditorAccount
    Identification assigned by an institution to identify an account. This identification is known by the account owner.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationDebtorAccount:
    r"""ObWriteDomesticStandingOrder3DataInitiationDebtorAccount
    Provides the details to identify the debtor account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount:
    r"""ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount
    The amount of the final Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount:
    r"""ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount
    The amount of the first Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount:
    r"""ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount
    The amount of the recurring Standing Order
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiation:
    r"""ObWriteDomesticStandingOrder3DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
    """
    
    creditor_account: ObWriteDomesticStandingOrder3DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    first_payment_amount: ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentAmount') }})
    first_payment_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    debtor_account: Optional[ObWriteDomesticStandingOrder3DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    final_payment_amount: Optional[ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentAmount') }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    recurring_payment_amount: Optional[ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentAmount') }})
    recurring_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    initiation: ObWriteDomesticStandingOrder3DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3:
    data: ObWriteDomesticStandingOrder3Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: ObRisk1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
