from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VariantEditFields:
    image_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_id') }})
    options: Optional[List[ProductOptionVariantEdit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    stock: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stock') }})
    stock_unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stock_unlimited') }})
    
