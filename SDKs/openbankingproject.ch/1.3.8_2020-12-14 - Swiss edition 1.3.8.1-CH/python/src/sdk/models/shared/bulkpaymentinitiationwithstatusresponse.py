from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import paymentinitiationbulkelement_json
from . import transactionstatus_enum


@dataclass_json
@dataclass
class BulkPaymentInitiationWithStatusResponse:
    acceptor_transaction_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptorTransactionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    batch_booking_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchBookingPreferred' }})
    debtor_account: accountreference16_ch.AccountReference16Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAccount' }})
    payment_information_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentInformationId' }})
    payments: List[paymentinitiationbulkelement_json.PaymentInitiationBulkElementJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payments' }})
    requested_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[transactionstatus_enum.TransactionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
