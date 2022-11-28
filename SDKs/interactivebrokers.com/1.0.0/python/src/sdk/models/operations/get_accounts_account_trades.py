from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetAccountsAccountTradesPathParams:
    account: str = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    
class GetAccountsAccountTrades200ApplicationJSONSideEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclass_json
@dataclass
class GetAccountsAccountTrades200ApplicationJSON:
    avg_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvgPrice') }})
    commission: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Commission') }})
    commission_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommissionCurrency') }})
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractId') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    customer_order_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    exec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecId') }})
    execution_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionTime') }})
    filled_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilledQuantity') }})
    last_market: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastMarket') }})
    listing_exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListingExchange') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderId') }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderType') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    remaining_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemainingQuantity') }})
    side: Optional[GetAccountsAccountTrades200ApplicationJSONSideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ticker') }})
    trade_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TradePrice') }})
    trade_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TradeSize') }})
    

@dataclass
class GetAccountsAccountTradesRequest:
    path_params: GetAccountsAccountTradesPathParams = field()
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAccountsAccountTradesResponse:
    content_type: str = field()
    status_code: int = field()
    get_accounts_account_trades_200_application_json_objects: Optional[List[GetAccountsAccountTrades200ApplicationJSON]] = field(default=None)
    
