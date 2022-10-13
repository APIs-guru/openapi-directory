from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SandboxTransaction:
    accounting_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountingBalance' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    booking_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_debit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditDebit' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    related_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedAccount' }})
    related_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedName' }})
    transaction_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionCode' }})
    value_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
