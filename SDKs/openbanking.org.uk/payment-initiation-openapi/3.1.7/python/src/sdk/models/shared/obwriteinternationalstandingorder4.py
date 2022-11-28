from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationCreditor:
    r"""ObWriteInternationalStandingOrder4DataInitiationCreditor
    Party to which an amount of money is due.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationCreditorAccount:
    r"""ObWriteInternationalStandingOrder4DataInitiationCreditorAccount
    Provides the details to identify the beneficiary account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationCreditorAgent:
    r"""ObWriteInternationalStandingOrder4DataInitiationCreditorAgent
    Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
    This is the servicer of the beneficiary account.
    """
    
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationDebtorAccount:
    r"""ObWriteInternationalStandingOrder4DataInitiationDebtorAccount
    Provides the details to identify the debtor account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationInstructedAmount:
    r"""ObWriteInternationalStandingOrder4DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiation:
    r"""ObWriteInternationalStandingOrder4DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
    """
    
    creditor_account: ObWriteInternationalStandingOrder4DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    currency_of_transfer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyOfTransfer') }})
    first_payment_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    instructed_amount: ObWriteInternationalStandingOrder4DataInitiationInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    charge_bearer: Optional[ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    creditor: Optional[ObWriteInternationalStandingOrder4DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    creditor_agent: Optional[ObWriteInternationalStandingOrder4DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_account: Optional[ObWriteInternationalStandingOrder4DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCountryCode') }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedPurpose') }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    initiation: ObWriteInternationalStandingOrder4DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4:
    data: ObWriteInternationalStandingOrder4Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: ObRisk1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
