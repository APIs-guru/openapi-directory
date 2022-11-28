from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostAccountsAccountOrderImpactPathParams:
    account: str = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostAccountsAccountOrderImpactRequestBody:
    aux_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aux Price') }})
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractId') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    instrument_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstrumentType') }})
    listing_exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListingExchange') }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Order Type') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    side: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ticker') }})
    time_in_force: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Time in Force') }})
    

@dataclass_json
@dataclass
class PostAccountsAccountOrderImpact200ApplicationJSON:
    commission: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Commission') }})
    commissions_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommissionsCurrency') }})
    equity_with_loan: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EquityWithLoan') }})
    init_margin: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitMargin') }})
    init_margin_before: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitMarginBefore') }})
    maint_margin: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintMargin') }})
    maint_margin_before: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintMarginBefore') }})
    margin_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarginCurrency') }})
    max_commissions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCommissions') }})
    min_commissions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCommissions') }})
    

@dataclass
class PostAccountsAccountOrderImpactRequest:
    path_params: PostAccountsAccountOrderImpactPathParams = field()
    request: PostAccountsAccountOrderImpactRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAccountsAccountOrderImpactResponse:
    content_type: str = field()
    status_code: int = field()
    post_accounts_account_order_impact_200_application_json_object: Optional[PostAccountsAccountOrderImpact200ApplicationJSON] = field(default=None)
    
