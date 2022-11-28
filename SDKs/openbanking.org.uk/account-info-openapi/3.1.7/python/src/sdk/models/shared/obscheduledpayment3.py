from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObScheduledPayment3:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    instructed_amount: ObActiveOrHistoricCurrencyAndAmount1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    scheduled_payment_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_type: ObExternalScheduleType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledType') }})
    creditor_account: Optional[ObCashAccount51] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    creditor_agent: Optional[ObBranchAndFinancialInstitutionIdentification51] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorReference') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    scheduled_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledPaymentId') }})
    
