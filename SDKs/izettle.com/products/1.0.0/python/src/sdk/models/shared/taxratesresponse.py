from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taxrate


@dataclass_json
@dataclass
class TaxRatesResponse:
    tax_rates: Optional[List[taxrate.TaxRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxRates' }})
    
