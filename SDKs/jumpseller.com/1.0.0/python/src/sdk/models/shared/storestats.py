from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StoreStatsConversions:
    added_to_cart: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_to_cart') }})
    checkout: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkout') }})
    paid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paid') }})
    

@dataclass_json
@dataclass
class StoreStatsNewVsReturningCustomers:
    global_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    per_day: Optional[List[NewVsReturning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_day') }})
    

@dataclass_json
@dataclass
class StoreStatsNewVsReturningOrders:
    global_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    per_day: Optional[List[NewVsReturning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_day') }})
    

@dataclass_json
@dataclass
class StoreStatsOrders:
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[List[OrdersData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class StoreStatsRegionOrders:
    display_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_mode') }})
    regions_orders: Optional[List[CountryOrders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions_orders') }})
    

@dataclass_json
@dataclass
class StoreStats:
    best_sold: Optional[List[BestSold]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('best_sold') }})
    conversions: Optional[StoreStatsConversions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversions') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    daily_visits: Optional[List[DailyVisits]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daily_visits') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    new_vs_returning_customers: Optional[StoreStatsNewVsReturningCustomers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_vs_returning_customers') }})
    new_vs_returning_orders: Optional[StoreStatsNewVsReturningOrders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_vs_returning_orders') }})
    orders: Optional[StoreStatsOrders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    payment_methods: Optional[List[PaymentMethodFreq]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_methods') }})
    referrers: Optional[List[Referrer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrers') }})
    region_orders: Optional[StoreStatsRegionOrders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region_orders') }})
    search_frequencies_all: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_frequencies_all') }})
    search_frequencies_without_results: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_frequencies_without_results') }})
    shipping_methods: Optional[List[ShippingMethodFreq]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_methods') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    traffic_type: Optional[List[TrafficType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic_type') }})
    visits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visits') }})
    
