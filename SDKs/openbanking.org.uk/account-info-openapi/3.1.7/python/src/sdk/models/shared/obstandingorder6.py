from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obcashaccount5_1
from . import obbranchandfinancialinstitutionidentification5_1
from . import obactiveorhistoriccurrencyandamount_4
from . import obactiveorhistoriccurrencyandamount_2
from . import obactiveorhistoriccurrencyandamount_11
from . import obactiveorhistoriccurrencyandamount_3
from . import obexternalstandingorderstatus1code_enum


@dataclass_json
@dataclass
class ObStandingOrder6:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    creditor_account: Optional[obcashaccount5_1.ObCashAccount51] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[obbranchandfinancialinstitutionidentification5_1.ObBranchAndFinancialInstitutionIdentification51] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    final_payment_amount: Optional[obactiveorhistoriccurrencyandamount_4.ObActiveOrHistoricCurrencyAndAmount4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentAmount' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_amount: Optional[obactiveorhistoriccurrencyandamount_2.ObActiveOrHistoricCurrencyAndAmount2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentAmount' }})
    first_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    last_payment_amount: Optional[obactiveorhistoriccurrencyandamount_11.ObActiveOrHistoricCurrencyAndAmount11] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPaymentAmount' }})
    last_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_payment_amount: Optional[obactiveorhistoriccurrencyandamount_3.ObActiveOrHistoricCurrencyAndAmount3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPaymentAmount' }})
    next_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfPayments' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    standing_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandingOrderId' }})
    standing_order_status_code: Optional[obexternalstandingorderstatus1code_enum.ObExternalStandingOrderStatus1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandingOrderStatusCode' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
