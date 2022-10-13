from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostAccountsAccountOrderImpactPathParams:
    account: str = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostAccountsAccountOrderImpactRequestBody:
    aux_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aux Price' }})
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractId' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerOrderId' }})
    instrument_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstrumentType' }})
    listing_exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListingExchange' }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Order Type' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Price' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    side: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Side' }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ticker' }})
    time_in_force: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Time in Force' }})
    

@dataclass
class PostAccountsAccountOrderImpactRequest:
    path_params: PostAccountsAccountOrderImpactPathParams = field(default=None)
    request: PostAccountsAccountOrderImpactRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAccountsAccountOrderImpact200ApplicationJSON:
    commission: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Commission' }})
    commissions_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommissionsCurrency' }})
    equity_with_loan: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EquityWithLoan' }})
    init_margin: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitMargin' }})
    init_margin_before: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitMarginBefore' }})
    maint_margin: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintMargin' }})
    maint_margin_before: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintMarginBefore' }})
    margin_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MarginCurrency' }})
    max_commissions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCommissions' }})
    min_commissions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCommissions' }})
    

@dataclass
class PostAccountsAccountOrderImpactResponse:
    content_type: str = field(default=None)
    post_accounts_account_order_impact_200_application_json_object: Optional[PostAccountsAccountOrderImpact200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
