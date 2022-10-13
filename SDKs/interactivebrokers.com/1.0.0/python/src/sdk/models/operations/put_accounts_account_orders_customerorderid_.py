from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutAccountsAccountOrdersCustomerOrderIDPathParams:
    customer_order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerOrderId', 'style': 'simple', 'explode': False }})
    account: str = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutAccountsAccountOrdersCustomerOrderIDRequestBody:
    aux_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aux Price' }})
    customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerOrderId' }})
    german_hft_algo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GermanHftAlgo' }})
    mifid2_algo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mifid2Algo' }})
    mifid2_decision_maker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mifid2DecisionMaker' }})
    mifid2_execution_algo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mifid2ExecutionAlgo' }})
    mifid2_execution_trader: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mifid2ExecutionTrader' }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Order Type' }})
    orig_customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrigCustomerOrderId' }})
    outside_rth: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outside RTH' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Price' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    side: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Side' }})
    time_in_force: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Time in Force' }})
    

@dataclass
class PutAccountsAccountOrdersCustomerOrderIDRequest:
    path_params: PutAccountsAccountOrdersCustomerOrderIDPathParams = field(default=None)
    request: PutAccountsAccountOrdersCustomerOrderIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON:
    customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerOrderId' }})
    order_qty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderQty' }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderType' }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Price' }})
    side: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Side' }})
    status: Optional[shared.OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    symbol: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Symbol' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    

@dataclass
class PutAccountsAccountOrdersCustomerOrderIDResponse:
    content_type: str = field(default=None)
    put_accounts_account_orders_customer_order_id_200_application_json_objects: Optional[List[PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON]] = field(default=None)
    status_code: int = field(default=None)
    
