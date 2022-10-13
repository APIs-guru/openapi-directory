from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import orderstatus_enum

class OrderStateSideEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclass_json
@dataclass
class OrderState:
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractId' }})
    customer_order_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerOrderId' }})
    filled_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilledQuantity' }})
    listing_exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListingExchange' }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderType' }})
    outside_rth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutsideRTH' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Price' }})
    remaining_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemainingQuantity' }})
    side: Optional[OrderStateSideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Side' }})
    status: Optional[orderstatus_enum.OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ticker' }})
    time_in_force: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeInForce' }})
    transaction_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionTime' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    
