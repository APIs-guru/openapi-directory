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
class LandlordAccountingModel:
    r"""LandlordAccountingModel
    Landlord Accounting
    """
    
    account_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountBalance') }})
    last_payment: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPayment'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payment_history: Optional[List[LandlordAccountingEntryModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentHistory') }})
    statements: Optional[List[LandlordAccountingInvoiceModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statements') }})
    
