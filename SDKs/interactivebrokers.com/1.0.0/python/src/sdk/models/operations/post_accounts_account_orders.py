from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostAccountsAccountOrdersPathParams:
    account: str = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostAccountsAccountOrdersRequestBody:
    aux_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aux Price') }})
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractId') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    german_hft_algo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GermanHftAlgo') }})
    instrument_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstrumentType') }})
    listing_exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListingExchange') }})
    mifid2_algo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2Algo') }})
    mifid2_decision_maker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2DecisionMaker') }})
    mifid2_execution_algo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2ExecutionAlgo') }})
    mifid2_execution_trader: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2ExecutionTrader') }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Order Type') }})
    order_restrictions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderRestrictions') }})
    outside_rth: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outside RTH') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    side: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ticker') }})
    time_in_force: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Time in Force') }})
    

@dataclass
class PostAccountsAccountOrdersRequest:
    path_params: PostAccountsAccountOrdersPathParams = field()
    request: PostAccountsAccountOrdersRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAccountsAccountOrdersResponse:
    content_type: str = field()
    status_code: int = field()
    order_states: Optional[List[shared.OrderState]] = field(default=None)
    
