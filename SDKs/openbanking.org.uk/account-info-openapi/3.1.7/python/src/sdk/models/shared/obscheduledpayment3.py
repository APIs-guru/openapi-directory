from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import obcashaccount5_1
from . import obbranchandfinancialinstitutionidentification5_1
from . import obactiveorhistoriccurrencyandamount_1
from . import obexternalscheduletype1code_enum


@dataclass_json
@dataclass
class ObScheduledPayment3:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    creditor_account: Optional[obcashaccount5_1.ObCashAccount51] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[obbranchandfinancialinstitutionidentification5_1.ObBranchAndFinancialInstitutionIdentification51] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    debtor_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorReference' }})
    instructed_amount: obactiveorhistoriccurrencyandamount_1.ObActiveOrHistoricCurrencyAndAmount1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    scheduled_payment_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledPaymentId' }})
    scheduled_type: obexternalscheduletype1code_enum.ObExternalScheduleType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledType' }})
    
