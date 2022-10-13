from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObCurrencyExchange5InstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObCurrencyExchange5:
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractIdentification' }})
    exchange_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRate' }})
    instructed_amount: Optional[ObCurrencyExchange5InstructedAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    quotation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceCurrency' }})
    target_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetCurrency' }})
    unit_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitCurrency' }})
    
