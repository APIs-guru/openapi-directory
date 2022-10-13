from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import debtoragent7_ch
from . import paymentinitiationbulkelement_json


@dataclass_json
@dataclass
class BulkPaymentInitiationJSON:
    batch_booking_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchBookingPreferred' }})
    debtor_account: accountreference16_ch.AccountReference16Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAccount' }})
    debtor_agent: debtoragent7_ch.DebtorAgent7Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorAgent' }})
    payments: List[paymentinitiationbulkelement_json.PaymentInitiationBulkElementJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payments' }})
    requested_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_execution_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedExecutionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
