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
class ObWriteFileResponse3DataCharges:
    r"""ObWriteFileResponse3DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: ObChargeBearerType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObWriteFileResponse3DataInitiationDebtorAccount:
    r"""ObWriteFileResponse3DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObWriteFileResponse3DataInitiationRemittanceInformation:
    r"""ObWriteFileResponse3DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclass
class ObWriteFileResponse3DataInitiation:
    r"""ObWriteFileResponse3DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
    """
    
    file_hash: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileHash') }})
    file_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileType') }})
    control_sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlSum') }})
    debtor_account: Optional[ObWriteFileResponse3DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    file_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileReference') }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    number_of_transactions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTransactions') }})
    remittance_information: Optional[ObWriteFileResponse3DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    requested_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedExecutionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteFileResponse3DataMultiAuthorisationStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_FURTHER_AUTHORISATION = "AwaitingFurtherAuthorisation"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteFileResponse3DataMultiAuthorisation:
    r"""ObWriteFileResponse3DataMultiAuthorisation
    The multiple authorisation flow response from the ASPSP.
    """
    
    status: ObWriteFileResponse3DataMultiAuthorisationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberReceived') }})
    number_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberRequired') }})
    
class ObWriteFileResponse3DataStatusEnum(str, Enum):
    INITIATION_COMPLETED = "InitiationCompleted"
    INITIATION_FAILED = "InitiationFailed"
    INITIATION_PENDING = "InitiationPending"


@dataclass_json
@dataclass
class ObWriteFileResponse3Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilePaymentId') }})
    initiation: ObWriteFileResponse3DataInitiation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    status: ObWriteFileResponse3DataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    charges: Optional[List[ObWriteFileResponse3DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    debtor: Optional[ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    multi_authorisation: Optional[ObWriteFileResponse3DataMultiAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAuthorisation') }})
    

@dataclass_json
@dataclass
class ObWriteFileResponse3:
    data: ObWriteFileResponse3Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
