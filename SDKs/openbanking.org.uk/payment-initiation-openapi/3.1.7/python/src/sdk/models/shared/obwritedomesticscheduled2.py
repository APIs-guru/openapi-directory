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
class ObWriteDomesticScheduled2DataInitiationCreditorAccount:
    r"""ObWriteDomesticScheduled2DataInitiationCreditorAccount
    Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduled2DataInitiationDebtorAccount:
    r"""ObWriteDomesticScheduled2DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduled2DataInitiationInstructedAmount:
    r"""ObWriteDomesticScheduled2DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduled2DataInitiationRemittanceInformation:
    r"""ObWriteDomesticScheduled2DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduled2DataInitiation:
    r"""ObWriteDomesticScheduled2DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
    """
    
    creditor_account: ObWriteDomesticScheduled2DataInitiationCreditorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    instructed_amount: ObWriteDomesticScheduled2DataInitiationInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    instruction_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionIdentification') }})
    requested_execution_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedExecutionDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creditor_postal_address: Optional[ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorPostalAddress') }})
    debtor_account: Optional[ObWriteDomesticScheduled2DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    end_to_end_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndToEndIdentification') }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    remittance_information: Optional[ObWriteDomesticScheduled2DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduled2Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    initiation: ObWriteDomesticScheduled2DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduled2:
    data: ObWriteDomesticScheduled2Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: ObRisk1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
