from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LandlordAccountingEntryModel:
    r"""LandlordAccountingEntryModel
    Landlord Accounting - Finance Entry
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    transaction_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionNumber') }})
    
