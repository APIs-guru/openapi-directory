from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkPaymentInitiationWithStatusResponse:
    r"""BulkPaymentInitiationWithStatusResponse
    Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
    
    """
    
    debtor_account: AccountReference16Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    payments: List[PaymentInitiationBulkElementJSON] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    acceptor_transaction_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptorTransactionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    batch_booking_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchBookingPreferred') }})
    payment_information_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentInformationId') }})
    requested_execution_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[TransactionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    
