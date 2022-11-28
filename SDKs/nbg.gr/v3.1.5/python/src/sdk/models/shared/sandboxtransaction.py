from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SandboxTransaction:
    r"""SandboxTransaction
    Transaction information
    """
    
    accounting_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingBalance') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    booking_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_debit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditDebit') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    related_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAccount') }})
    related_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedName') }})
    transaction_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCode') }})
    value_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
