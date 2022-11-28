from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObFundsConfirmationResponse1DataInstructedAmount:
    r"""ObFundsConfirmationResponse1DataInstructedAmount
    Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObFundsConfirmationResponse1Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funds_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailable') }})
    funds_confirmation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsConfirmationId') }})
    instructed_amount: ObFundsConfirmationResponse1DataInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    

@dataclass_json
@dataclass
class ObFundsConfirmationResponse1:
    data: ObFundsConfirmationResponse1Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
