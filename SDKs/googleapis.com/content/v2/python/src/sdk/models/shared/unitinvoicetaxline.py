from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class UnitInvoiceTaxLine:
    tax_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmount' }})
    tax_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxName' }})
    tax_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxType' }})
    
