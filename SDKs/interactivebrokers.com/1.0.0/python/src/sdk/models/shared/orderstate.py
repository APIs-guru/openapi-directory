from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrderStateSideEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclass_json
@dataclass
class OrderState:
    r"""OrderState
    An object containing all the properties defining an order
    """
    
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractId') }})
    customer_order_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    filled_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilledQuantity') }})
    listing_exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListingExchange') }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderType') }})
    outside_rth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutsideRTH') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    remaining_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemainingQuantity') }})
    side: Optional[OrderStateSideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    status: Optional[OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ticker') }})
    time_in_force: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeInForce') }})
    transaction_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionTime') }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    
