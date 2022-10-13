from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import taxrate


@dataclass_json
@dataclass
class TaxRatesCreateRequest:
    tax_rates: List[taxrate.TaxRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxRates' }})
    
