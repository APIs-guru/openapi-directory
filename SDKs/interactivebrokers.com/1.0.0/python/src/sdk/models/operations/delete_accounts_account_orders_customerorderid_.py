from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDPathParams:
    customer_order_id: str = field(metadata={'path_param': { 'field_name': 'CustomerOrderId', 'style': 'simple', 'explode': False }})
    account: str = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON:
    customer_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    order_qty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderQty') }})
    order_type: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderType') }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    side: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    status: Optional[shared.OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    symbol: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Symbol') }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    

@dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDRequest:
    path_params: DeleteAccountsAccountOrdersCustomerOrderIDPathParams = field()
    

@dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDResponse:
    content_type: str = field()
    status_code: int = field()
    delete_accounts_account_orders_customer_order_id_200_application_json_objects: Optional[List[DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON]] = field(default=None)
    
