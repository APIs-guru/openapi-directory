from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDPathParams:
    customer_order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerOrderId', 'style': 'simple', 'explode': False }})
    account: str = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDRequest:
    path_params: DeleteAccountsAccountOrdersCustomerOrderIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON:
    customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerOrderId' }})
    order_qty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderQty' }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderType' }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Price' }})
    side: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Side' }})
    status: Optional[shared.OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    symbol: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Symbol' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    

@dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDResponse:
    content_type: str = field(default=None)
    delete_accounts_account_orders_customer_order_id_200_application_json_objects: Optional[List[DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON]] = field(default=None)
    status_code: int = field(default=None)
    
