from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportExchangeRate:
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contractIdentification' }})
    exchange_rate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeRate' }})
    quotation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCurrency' }})
    target_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCurrency' }})
    unit_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitCurrency' }})
    
