from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObCurrencyExchange5InstructedAmount:
    r"""ObCurrencyExchange5InstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObCurrencyExchange5:
    r"""ObCurrencyExchange5
    Set of elements used to provide details on the currency exchange.
    """
    
    exchange_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRate') }})
    source_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceCurrency') }})
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractIdentification') }})
    instructed_amount: Optional[ObCurrencyExchange5InstructedAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    quotation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetCurrency') }})
    unit_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitCurrency') }})
    
