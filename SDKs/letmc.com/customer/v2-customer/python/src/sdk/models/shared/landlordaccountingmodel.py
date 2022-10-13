from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordaccountingentrymodel
from . import landlordaccountinginvoicemodel


@dataclass_json
@dataclass
class LandlordAccountingModel:
    account_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountBalance' }})
    last_payment: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPayment', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payment_history: Optional[List[landlordaccountingentrymodel.LandlordAccountingEntryModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentHistory' }})
    statements: Optional[List[landlordaccountinginvoicemodel.LandlordAccountingInvoiceModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statements' }})
    
