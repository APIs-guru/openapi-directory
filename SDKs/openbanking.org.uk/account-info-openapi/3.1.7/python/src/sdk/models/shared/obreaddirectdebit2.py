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
class ObReadDirectDebit2DataDirectDebit:
    r"""ObReadDirectDebit2DataDirectDebit
    Account to or from which a cash entry is made.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    mandate_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MandateIdentification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    direct_debit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectDebitId') }})
    direct_debit_status_code: Optional[ObExternalDirectDebitStatus1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectDebitStatusCode') }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    previous_payment_amount: Optional[ObActiveOrHistoricCurrencyAndAmount0] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousPaymentAmount') }})
    previous_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObReadDirectDebit2Data:
    direct_debit: Optional[List[ObReadDirectDebit2DataDirectDebit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectDebit') }})
    

@dataclass_json
@dataclass
class ObReadDirectDebit2:
    data: ObReadDirectDebit2Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
