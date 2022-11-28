from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VariantDto:
    uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    cost_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costPrice') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[List[VariantOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    presentation: Optional[PresentationDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentation') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    vat_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatPercentage') }})
    
