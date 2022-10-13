from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obexternaldirectdebitstatus1code_enum
from . import obactiveorhistoriccurrencyandamount_0
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadDirectDebit2DataDirectDebit:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    direct_debit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectDebitId' }})
    direct_debit_status_code: Optional[obexternaldirectdebitstatus1code_enum.ObExternalDirectDebitStatus1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectDebitStatusCode' }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    mandate_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MandateIdentification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    previous_payment_amount: Optional[obactiveorhistoriccurrencyandamount_0.ObActiveOrHistoricCurrencyAndAmount0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousPaymentAmount' }})
    previous_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObReadDirectDebit2Data:
    direct_debit: Optional[List[ObReadDirectDebit2DataDirectDebit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectDebit' }})
    

@dataclass_json
@dataclass
class ObReadDirectDebit2:
    data: ObReadDirectDebit2Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
