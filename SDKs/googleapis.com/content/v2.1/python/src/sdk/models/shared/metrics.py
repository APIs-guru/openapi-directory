from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Metrics:
    r"""Metrics
    Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
    """
    
    aos: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aos') }})
    aov_micros: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aovMicros') }})
    clicks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicks') }})
    conversion_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionRate') }})
    conversion_value_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionValueMicros') }})
    conversions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversions') }})
    ctr: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ctr') }})
    days_to_ship: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysToShip') }})
    impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressions') }})
    item_days_to_ship: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemDaysToShip') }})
    item_fill_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemFillRate') }})
    ordered_item_sales_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderedItemSalesMicros') }})
    ordered_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderedItems') }})
    orders: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    rejected_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectedItems') }})
    return_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnRate') }})
    returned_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnedItems') }})
    returns_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnsMicros') }})
    shipped_item_sales_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippedItemSalesMicros') }})
    shipped_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippedItems') }})
    shipped_orders: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippedOrders') }})
    unshipped_items: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unshippedItems') }})
    unshipped_orders: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unshippedOrders') }})
    
