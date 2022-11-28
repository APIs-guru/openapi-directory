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
class ObStandingOrder5:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    creditor_account: Optional[ObCashAccount5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    final_payment_amount: Optional[ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentAmount') }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_amount: Optional[ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentAmount') }})
    first_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_payment_amount: Optional[ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPaymentAmount') }})
    last_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_payment_amount: Optional[ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPaymentAmount') }})
    next_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    standing_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandingOrderId') }})
    standing_order_status_code: Optional[ObExternalStandingOrderStatus1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandingOrderStatusCode') }})
    
