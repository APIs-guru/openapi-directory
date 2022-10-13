from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price
from . import variantoption
from . import presentationdto
from . import price


@dataclass_json
@dataclass
class VariantDto:
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    cost_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costPrice' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[List[variantoption.VariantOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    presentation: Optional[presentationdto.PresentationDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentation' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    vat_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatPercentage' }})
    
