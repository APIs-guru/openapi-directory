from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MerchantOrderReturn:
    r"""MerchantOrderReturn
    Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
    """
    
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    order_return_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderReturnId') }})
    return_items: Optional[List[MerchantOrderReturnItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnItems') }})
    return_shipments: Optional[List[ReturnShipment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShipments') }})
    
