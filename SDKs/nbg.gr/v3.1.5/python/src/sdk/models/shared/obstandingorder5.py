from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import obcashaccount5
from . import obactiveorhistoriccurrencyandamount
from . import obactiveorhistoriccurrencyandamount
from . import obactiveorhistoriccurrencyandamount
from . import obactiveorhistoriccurrencyandamount
from . import obexternalstandingorderstatus1code_enum


@dataclass_json
@dataclass
class ObStandingOrder5:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    creditor_account: Optional[obcashaccount5.ObCashAccount5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    final_payment_amount: Optional[obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentAmount' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_amount: Optional[obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentAmount' }})
    first_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    last_payment_amount: Optional[obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPaymentAmount' }})
    last_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_payment_amount: Optional[obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPaymentAmount' }})
    next_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    standing_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandingOrderId' }})
    standing_order_status_code: Optional[obexternalstandingorderstatus1code_enum.ObExternalStandingOrderStatus1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandingOrderStatusCode' }})
    
