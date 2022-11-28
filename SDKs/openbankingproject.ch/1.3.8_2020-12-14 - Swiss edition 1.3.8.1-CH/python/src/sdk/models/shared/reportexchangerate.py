from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportExchangeRate:
    r"""ReportExchangeRate
    Exchange Rate.
    """
    
    exchange_rate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeRate') }})
    quotation_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotationDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCurrency') }})
    target_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCurrency') }})
    unit_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitCurrency') }})
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractIdentification') }})
    
