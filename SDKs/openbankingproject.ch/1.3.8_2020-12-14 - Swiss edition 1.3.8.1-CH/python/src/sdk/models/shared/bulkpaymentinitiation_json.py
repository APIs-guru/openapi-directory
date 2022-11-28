from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkPaymentInitiationJSON:
    r"""BulkPaymentInitiationJSON
    Generic Body for a bulk payment initation via JSON.
    
    paymentInformationId is contained in code but commented since it is n.a.
    and not all ASPSP are able to support this field now.
    In a later version the field will be mandatory.
    
    """
    
    debtor_account: AccountReference16Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    debtor_agent: DebtorAgent7Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAgent') }})
    payments: List[PaymentInitiationBulkElementJSON] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    batch_booking_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchBookingPreferred') }})
    requested_execution_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_execution_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
