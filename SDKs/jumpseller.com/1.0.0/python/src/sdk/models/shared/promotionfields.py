from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PromotionFields:
    begins_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begins_at') }})
    categories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    condition_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition_price') }})
    condition_qty: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition_qty') }})
    cumulative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    customer_categories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_categories') }})
    discount_amount_fix: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_amount_fix') }})
    discount_amount_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_amount_percent') }})
    discount_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_target') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lasts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lasts') }})
    max_times_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_times_used') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    products: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    products_x: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products_x') }})
    quantity_x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity_x') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    times_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('times_used') }})
    
